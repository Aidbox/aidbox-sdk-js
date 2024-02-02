"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bundle = exports.GetResources = exports.Client = exports.E = exports.buildResourceUrl = exports.sleep = exports.encode = exports.decode = exports.HTTPError = void 0;
const tslib_1 = require("tslib");
const base64_1 = tslib_1.__importDefault(require("@juanelas/base64"));
const http_client_1 = require("./http-client");
Object.defineProperty(exports, "HTTPError", { enumerable: true, get: function () { return http_client_1.HTTPError; } });
function decode(str) {
    return base64_1.default.decode(str, true).toString();
}
exports.decode = decode;
function encode(str) {
    return base64_1.default.encode(str);
}
exports.encode = encode;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
exports.sleep = sleep;
const buildResourceUrl = (resource, id) => ['fhir', resource, id && id].filter(Boolean).join('/');
exports.buildResourceUrl = buildResourceUrl;
class E extends Error {
    constructor(data, response, request, options) {
        const code = (response.status || response.status === 0) ? response.status : '';
        const title = response.statusText || '';
        const status = `${code} ${title}`.trim();
        const reason = status ? `status code ${status}` : 'an unknown error';
        super(`Request failed with ${reason}`);
        this.name = 'HTTPError';
        this.response = { status: response.status, headers: response.headers, url: response.url, data };
        this.request = request;
        this.options = options;
    }
}
exports.E = E;
const request = (fn) => async (url, options) => {
    try {
        const response = await fn(url, options);
        return { response: { url: response.url, headers: response.headers, status: response.status, data: await response.json() } };
    }
    catch (error) {
        if (error instanceof http_client_1.HTTPError) {
            const data = await error.response.json();
            throw new E(data, error.response, error.request, error.options);
        }
        throw error;
    }
};
class Task {
    constructor(client) {
        this.client = client;
        this.workers = [];
    }
    async cancel(id) {
        const response = await this.client.post('rpc', {
            json: {
                method: 'awf.task/cancel',
                params: { id }
            }
        }).json();
        return response.result.resource;
    }
    async start(id, executionId) {
        try {
            return this.client.post('rpc', {
                json: {
                    method: 'awf.task/start',
                    params: { id, execId: executionId }
                }
            }).json();
        }
        catch (error) {
            if (error.name === 'HTTPError') {
                const errorJson = await error.response.json();
                console.dir(errorJson, { depth: 5 });
            }
        }
    }
    async complete(id, executionId, payload) {
        return this.client.post('rpc', {
            json: {
                method: 'awf.task/success',
                params: { id, execId: executionId, result: payload }
            }
        }).json();
    }
    async fail(id, executionId, payload) {
        try {
            return this.client.post('rpc', {
                json: {
                    method: 'awf.task/fail',
                    params: { id, execId: executionId, result: payload }
                }
            }).json();
        }
        catch (error) {
            if (error.name === 'HTTPError') {
                const errorJson = await error.response.json();
                console.dir(errorJson, { depth: 5 });
            }
        }
    }
    execute(definition, params) {
        return this.client.post('rpc', {
            json: {
                method: 'awf.task/create-and-execute',
                params: { definition, params }
            }
        }).json();
    }
    /**
     * Return number ready for execution tasks except Decisions task
     *
     * @param {string} [definition] - Task definition name
     * @returns {Promise<number>}
     *
     */
    async pendingTasks(definition) {
        const params = new URLSearchParams({ '_count': '0', '.status': 'ready', 'definition-not': 'awf.workflow/decision-task' });
        if (definition) {
            params.append('definition', definition);
            params.delete('definition-not');
        }
        return this.client.get('AidboxTask', {
            searchParams: params
        }).json().then(r => r.total);
    }
    async pendingDecisions() {
        return this.client.get('AidboxTask', {
            searchParams: new URLSearchParams({ '_count': '0', '.status': 'ready', 'definition': 'awf.workflow/decision-task' })
        }).json().then(r => r.total);
    }
    async history(id) {
        return this.client.post('rpc', {
            json: {
                method: 'awf.task/status',
                params: { id, 'include-log?': true }
            }
        }).json().then(r => r.result);
    }
    async inProgress() {
        return this.client.get('AidboxTask', {
            searchParams: new URLSearchParams({ '_count': '0', '.status': 'in-progress' })
        }).json().then(r => r.total);
    }
    createHandler(handler) {
        return async (task) => {
            await this.start(task.id, task.execId);
            try {
                const result = await handler(task);
                await this.complete(task.id, task.execId, result);
            }
            catch (error) {
                if (error.name === 'HTTPError') {
                    const errorJson = await error.response.json();
                    console.dir(errorJson, { depth: 5 });
                    await this.fail(task.id, task.execId, errorJson);
                }
                else {
                    console.dir(error, { depth: 5 });
                    // for some reason does not fail the task
                    await this.fail(task.id, task.execId, error);
                }
            }
        };
    }
    async poll(params, options) {
        const tasksBatch = await this.client.post('rpc', {
            json: {
                method: 'awf.task/poll',
                params: { ...params, maxBatchSize: options.batchSize }
            }
        }).json();
        return tasksBatch.result.resources;
    }
    async runDaemon(poll, handler, options) {
        while (true) {
            const tasks = await poll();
            await Promise.allSettled(tasks.map(async (task) => handler(task)));
            await (0, exports.sleep)(options.pollInterval || 1000);
        }
    }
    implement(name, handler, options = {}) {
        const worker = this.runDaemon(() => this.poll({ taskDefinitions: [name] }, options), this.createHandler(handler), options);
        this.workers.push(worker);
    }
}
class Workflow {
    constructor(client, task) {
        this.client = client;
        this.task = task;
        this.workers = [];
    }
    async runDaemon(poll, handler, options) {
        while (true) {
            const tasks = await poll();
            await Promise.allSettled(tasks.map(async (task) => handler(task)));
            await (0, exports.sleep)(options.pollInterval || 1000);
        }
    }
    implement(name, handler, options = {}) {
        const worker = this.runDaemon(() => this.task.poll({ workflowDefinitions: [name] }, options), this.task.createHandler(this.wrapHandler(handler)), options);
        this.workers.push(worker);
    }
    wrapHandler(handler) {
        return (params) => handler(params, {
            complete: (result) => ({
                action: 'awf.workflow.action/complete-workflow',
                result
            }),
            execute: (params) => ({
                'action': 'awf.workflow.action/schedule-task',
                'task-request': { definition: params.definition, params: params.params }
            }),
            fail: (error) => ({ action: 'awf.workflow.action/fail', error })
        });
    }
    execute(definition, params) {
        return this.client.post('rpc', {
            json: {
                method: 'awf.workflow/create-and-execute',
                params: { definition, params }
            }
        }).json();
    }
    async terminate(id) {
        return this.client.post('rpc', {
            json: {
                method: 'awf.workflow/cancel',
                params: { id }
            }
        }).json().then(r => r.result.resource);
    }
    async inProgress() {
        return this.client.get('AidboxWorkflow', {
            searchParams: new URLSearchParams({ '_count': '0', '.status': 'in-progress' })
        }).json().then(r => r.total);
    }
    async history(id) {
        return this.client.post('rpc', {
            json: {
                method: 'awf.workflow/status',
                params: { id, 'include-activities?': true }
            }
        }).json().then(r => r.result);
    }
}
const resourceOwnerAuthorization = (httpclient, auth) => async ({ username, password }) => {
    if (typeof auth.storage.set === 'function') {
        await auth.storage.set('');
    }
    const response = await httpclient.post('auth/token', {
        json: {
            username,
            password,
            client_id: auth.client.id,
            client_secret: auth.client.secret,
            grant_type: 'password'
        }
    }).json();
    if (typeof auth.storage.set === 'function') {
        await auth.storage.set(response.access_token);
    }
    return response;
};
const resourceOwnerLogout = (httpclient, auth) => async () => {
    auth.storage.set(undefined);
};
function isBasic(params) {
    return params.method === 'basic';
}
function isResourceOwner(params) {
    return params.method === 'resource-owner';
}
class Client {
    constructor(baseURL, config) {
        // переделать на reduce и добавить полей
        this.HTTPClient = () => ({
            get: request(this.client.get),
            post: request(this.client.post),
            patch: request(this.client.patch),
            put: request(this.client.put),
            delete: request(this.client.delete),
            head: request(this.client.head)
        });
        this.resource = {
            list: (resourceName) => {
                return new GetResources(this.client, resourceName);
            },
            get: async (resourceName, id) => {
                return this.client.get((0, exports.buildResourceUrl)(resourceName, id)).json();
            },
            delete: async (resourceName, id) => {
                return this.client.delete((0, exports.buildResourceUrl)(resourceName, id)).json();
            },
            update: async (resourceName, id, input) => {
                return this.client.patch((0, exports.buildResourceUrl)(resourceName, id), { json: input }).json();
            },
            create: async (resourceName, input) => {
                return this.client.post((0, exports.buildResourceUrl)(resourceName), { json: input }).json();
            },
            override: async (resourceName, id, input) => {
                return this.client.put((0, exports.buildResourceUrl)(resourceName, id), { json: input }).json();
            }
        };
        this.aidboxQuery = {
            create: async (name, json) => {
                const response = await this.client.put(`AidboxQuery/${name}`, { json });
                return response.json();
            },
            execute: async (name, params) => {
                const queryParams = new URLSearchParams();
                if (params) {
                    for (const key of Object.keys(params)) {
                        const value = params[key];
                        if (value) {
                            queryParams.set(key, value.toString());
                        }
                    }
                }
                return this.client.get(`/$query/${name}`, {
                    searchParams: queryParams
                }).json();
            }
        };
        this.subsSubscription = {
            create: async ({ id, status, trigger, channel }) => {
                const response = await this.client.put(`/SubsSubscription/${id}`, {
                    json: {
                        status,
                        trigger,
                        channel: { ...channel, type: 'rest-hook' }
                    }
                });
                return response.json();
            }
        };
        this.config = config;
        const client = http_client_1.httpClient.create({
            prefixUrl: baseURL,
            throwHttpErrors: true,
            hooks: {
                beforeRequest: [
                    async (request) => {
                        if (isBasic(config.auth)) {
                            const { username, password } = config.auth.credentials;
                            request.headers.set('Authorization', `Basic ${encode(`${username}:${password}`)}`);
                        }
                        if (isResourceOwner(config.auth)) {
                            const token = config.auth.storage.get();
                            if (token)
                                request.headers.set('Authorization', `Bearer ${token}`);
                        }
                    }
                ]
            }
        });
        const taskClient = new Task(client);
        this.task = taskClient;
        this.workflow = new Workflow(client, taskClient);
        this.client = client;
    }
    get auth() {
        if (isBasic(this.config.auth))
            return this.config.auth;
        if (isResourceOwner(this.config.auth)) {
            return {
                ...this.config.auth,
                signIn: resourceOwnerAuthorization(this.client, this.config.auth),
                signUp: () => { console.log('TBD'); },
                signOut: () => { console.log('TBD'); }
            };
        }
        throw new Error('');
    }
    async rpc(method, params) {
        const response = await this.client.post('rpc', {
            method: 'POST',
            json: { method, params }
        });
        return response.json();
    }
    async rawSQL(sql, params) {
        const body = [sql, ...(params?.map((value) => value?.toString()) ?? [])];
        const response = await this.client.post('$sql', { json: body });
        return response.json();
    }
    async sendLog(data) {
        await this.client.post('$loggy', { json: data });
    }
}
exports.Client = Client;
class GetResources {
    constructor(client, resourceName) {
        this.searchParamsObject = new URLSearchParams();
        this.resourceName = resourceName;
        this.client = client;
    }
    where(key, value, prefix) {
        if (Array.isArray(value)) {
            const val = value;
            if (prefix) {
                if (prefix === 'eq') {
                    this.searchParamsObject.append(key.toString(), val.join(','));
                    return this;
                }
                val.forEach((item) => {
                    this.searchParamsObject.append(key.toString(), `${prefix}${item}`);
                });
                return this;
            }
            const queryValues = val.join(',');
            this.searchParamsObject.append(key.toString(), queryValues);
            return this;
        }
        const queryValue = `${prefix ?? ''}${value}`;
        this.searchParamsObject.append(key.toString(), queryValue);
        return this;
    }
    contained(contained, containedType) {
        this.searchParamsObject.set('_contained', contained.toString());
        if (containedType) {
            this.searchParamsObject.set('_containedType', containedType);
        }
        return this;
    }
    count(value) {
        this.searchParamsObject.set('_count', value.toString());
        return this;
    }
    elements(args) {
        const queryValue = args.join(',');
        this.searchParamsObject.set('_elements', queryValue);
        return this;
    }
    summary(type) {
        this.searchParamsObject.set('_summary', type.toString());
        return this;
    }
    sort(key, dir) {
        const existedSortParams = this.searchParamsObject.get('_sort');
        if (existedSortParams) {
            const newSortParams = `${existedSortParams},${dir === 'asc' ? '-' : ''}${key.toString()}`;
            this.searchParamsObject.set('_sort', newSortParams);
            return this;
        }
        this.searchParamsObject.set('_sort', dir === 'asc' ? `-${key.toString()}` : key.toString());
        return this;
    }
    then(onfulfilled, _onrejected) {
        return this.client.get((0, exports.buildResourceUrl)(this.resourceName), { searchParams: this.searchParamsObject })
            .then((response) => {
            return onfulfilled ? onfulfilled(response.json()) : response.json();
        });
    }
}
exports.GetResources = GetResources;
class Bundle {
    constructor(type = 'transaction') {
        this.type = type;
        this.entry = [];
    }
    addEntry(resource, { method, resourceName, id }) {
        this.entry.push({
            request: {
                method,
                url: (0, exports.buildResourceUrl)(resourceName, id)
            },
            resource: { ...resource, resourceType: resourceName }
        });
    }
    toJSON() {
        return {
            resourceType: 'Bundle',
            type: this.type,
            entry: this.entry
        };
    }
    toString() {
        return JSON.stringify({
            resourceType: 'Bundle',
            type: this.type,
            entry: this.entry
        });
    }
}
exports.Bundle = Bundle;
