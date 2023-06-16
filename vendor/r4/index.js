"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = exports.GetResources = exports.Client = void 0;
const axios_1 = require("axios");
const types_1 = require("./types");
function buildURL(url) {
    return "/fhir/" + url;
}
class Client {
    constructor(baseURL, credentials) {
        this.client = axios_1.default.create({
            baseURL: baseURL.endsWith("/")
                ? baseURL.slice(0, baseURL.length - 1)
                : baseURL,
            auth: credentials,
        });
    }
    getResources(resourceName) {
        return new GetResources(this.client, resourceName);
    }
    getResource(resourceName, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.get(buildURL(resourceName + "/" + id));
            return response.data;
        });
    }
    deleteResource(resourceName, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.delete(buildURL(resourceName + "/" + id));
            return response.data;
        });
    }
    createQuery(name, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.put(`/AidboxQuery/${name}`, body);
            return response.data;
        });
    }
    executeQuery(name, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = new URLSearchParams();
            if (params) {
                for (const key of Object.keys(params)) {
                    const value = params[key];
                    if (value) {
                        queryParams.set(key, value.toString());
                    }
                }
            }
            return this.client.get(`$query/${name}`, {
                params: queryParams,
            });
        });
    }
    patchResource(resourceName, id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.patch(buildURL(resourceName + "/" + id), Object.assign({}, body));
            return response.data;
        });
    }
    createResource(resourceName, 
    //@ts-ignore
    body) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post(buildURL(resourceName), Object.assign({}, body));
            return response.data;
        });
    }
    rawSQL(sql, params) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const body = [sql, ...((_a = params === null || params === void 0 ? void 0 : params.map((value) => value === null || value === void 0 ? void 0 : value.toString())) !== null && _a !== void 0 ? _a : [])];
            const response = yield this.client.post("/$sql", body);
            return response.data;
        });
    }
    createSubscription({ id, status, trigger, channel, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.put(`SubsSubscription/${id}`, {
                status,
                trigger,
                channel: Object.assign(Object.assign({}, channel), { type: "rest-hook" }),
            });
            return response.data;
        });
    }
    subscriptionEntry({ id, status, trigger, channel, }) {
        return {
            resourceType: "SubsSubscription",
            id,
            status,
            trigger,
            channel: Object.assign(Object.assign({}, channel), { type: "rest-hook" }),
        };
    }
    sendLog(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.post("/$loggy", data);
        });
    }
    transformToBundle(resources, method) {
        return resources.map((resource) => ({
            request: {
                method,
                url: method === "POST"
                    ? `/${resource.resourceType}`
                    : `/${resource.resourceType}/${resource.id}`,
            },
            resource,
        }));
    }
    bundleRequest(entry, type = "transaction") {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post("/", {
                resourceType: "Bundle",
                type,
                entry,
            });
            return response.data;
        });
    }
}
exports.Client = Client;
class GetResources {
    constructor(client, resourceName) {
        this.client = client;
        this.searchParamsObject = new URLSearchParams();
        this.resourceName = resourceName;
    }
    where(key, value, prefix) {
        if (Array.isArray(value)) {
            const val = value;
            if (prefix) {
                if (prefix === "eq") {
                    this.searchParamsObject.append(key.toString(), val.join(","));
                    return this;
                }
                val.map((item) => {
                    this.searchParamsObject.append(key.toString(), `${prefix}${item}`);
                });
                return this;
            }
            const queryValues = val.join(",");
            this.searchParamsObject.append(key.toString(), queryValues);
            return this;
        }
        const queryValue = `${prefix !== null && prefix !== void 0 ? prefix : ""}${value}`;
        this.searchParamsObject.append(key.toString(), queryValue);
        return this;
    }
    contained(contained, containedType) {
        this.searchParamsObject.set("_contained", contained.toString());
        if (containedType) {
            this.searchParamsObject.set("_containedType", containedType);
        }
        return this;
    }
    count(value) {
        this.searchParamsObject.set("_count", value.toString());
        return this;
    }
    elements(args) {
        const queryValue = args.join(",");
        this.searchParamsObject.set("_elements", queryValue);
        return this;
    }
    summary(type) {
        this.searchParamsObject.set("_summary", type.toString());
        return this;
    }
    sort(key, dir) {
        const existedSortParams = this.searchParamsObject.get("_sort");
        if (existedSortParams) {
            const newSortParams = `${existedSortParams},${dir === "asc" ? "-" : ""}${key.toString()}`;
            this.searchParamsObject.set("_sort", newSortParams);
            return this;
        }
        this.searchParamsObject.set("_sort", dir === "asc" ? `-${key.toString()}` : key.toString());
        return this;
    }
    then(onfulfilled, onrejected) {
        return this.client
            .get(buildURL(this.resourceName), {
            params: this.searchParamsObject,
        })
            .then((response) => {
            return onfulfilled
                ? onfulfilled(response.data)
                : response.data;
        });
    }
}
exports.GetResources = GetResources;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
class Engine {
    constructor(baseURL, credentials) {
        this.task = {
            execute: this.executeTask.bind(this),
            implement: (name, handler, options = {}) => {
                const worker = this.runDaemon(() => this.poll({ taskDefinitions: [types_1.TaskDefinitionsNameMap[name]] }, options), this.createHandler(handler), options);
                this.workers.push(worker);
            },
        };
        this.workflow = {
            execute: this.executeWorkflow.bind(this),
            implement: (name, handler, options = {}) => {
                const worker = this.runDaemon(() => this.poll({ workflowDefinitions: [types_1.WorkflowDefinitionsNameMap[name]] }, options), this.createHandler(this.wrapHandler(handler)), options);
                this.workers.push(worker);
            },
        };
        this.client = axios_1.default.create({
            baseURL: baseURL.endsWith("/")
                ? baseURL.slice(0, baseURL.length - 1)
                : baseURL,
            auth: credentials,
        });
        this.workers = [];
    }
    runDaemon(poll, handler, options) {
        return __awaiter(this, void 0, void 0, function* () {
            while (true) {
                const tasks = yield poll();
                yield Promise.allSettled(tasks.map((task) => __awaiter(this, void 0, void 0, function* () { return handler(task); })));
                yield sleep(options.pollInterval || 1000);
            }
        });
    }
    wrapHandler(handler) {
        return (params) => handler(params, {
            complete: (result) => ({
                action: "awf.workflow.action/complete-workflow",
                result,
            }),
            execute: (params) => ({
                action: "awf.workflow.action/schedule-task",
                "task-request": {
                    definition: types_1.TaskDefinitionsNameMap[params.definition],
                    params: params.params,
                },
            }),
            fail: (error) => ({ action: "awf.workflow.action/fail", error }),
        });
    }
    createHandler(handler) {
        return (task) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            yield this.startTask(task.id, task.execId);
            try {
                const result = yield handler(task);
                yield this.completeTask(task.id, task.execId, result);
            }
            catch (error) {
                console.error((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
                yield this.failTask(task.id, task.execId, error);
            }
        });
    }
    poll(params, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data: tasksBatch } = yield this.client.post("/rpc", {
                method: "awf.task/poll",
                params: Object.assign(Object.assign({}, params), { maxBatchSize: options.batchSize }),
            });
            return tasksBatch.result.resources;
        });
    }
    startTask(id, executionId) {
        var _a;
        try {
            return this.client.post("/rpc", {
                method: "awf.task/start",
                params: { id, execId: executionId },
            });
        }
        catch (error) {
            console.error((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        }
    }
    completeTask(id, executionId, payload) {
        return this.client.post("/rpc", {
            method: "awf.task/success",
            params: { id, execId: executionId, result: payload },
        });
    }
    failTask(id, executionId, payload) {
        var _a;
        try {
            return this.client.post("/rpc", {
                method: "awf.task/fail",
                params: { id, execId: executionId, result: payload },
            });
        }
        catch (error) {
            console.error((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        }
    }
    executeWorkflow(name, params) {
        try {
            return this.client.post("/rpc", {
                method: "awf.workflow/create-and-execute",
                params: { definition: types_1.WorkflowDefinitionsNameMap[name], params },
            });
        }
        catch (error) {
            throw error === null || error === void 0 ? void 0 : error.response;
        }
    }
    executeTask(definition, params) {
        try {
            return this.client.post("/rpc", {
                method: "awf.task/create-and-execute",
                params: { definition: types_1.TaskDefinitionsNameMap[definition], params },
            });
        }
        catch (error) {
            throw error === null || error === void 0 ? void 0 : error.response;
        }
    }
}
exports.Engine = Engine;
