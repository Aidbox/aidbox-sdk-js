"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClient = exports.HttpClient = exports.stop = exports.maxSafeTimeout = exports.responseTypes = exports.requestMethods = exports.supportsFormData = exports.supportsResponseStreams = exports.supportsAbortController = exports.supportsRequestStreams = exports.timeout = exports.normalizeRetryOptions = exports.normalizeRequestMethod = exports.deepMerge = exports.mergeHeaders = exports.validateAndMerge = exports.isObject = exports.delay = exports.TimeoutError = exports.HTTPError = exports.composeAbortError = void 0;
const isDomExceptionSupported = Boolean(globalThis.DOMException);
// TODO: When targeting Node.js 18, use `signal.throwIfAborted()` (https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/throwIfAborted)
function composeAbortError(signal) {
    /*
    NOTE: Use DomException with AbortError name as specified in MDN docs (https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort)
    > When abort() is called, the fetch() promise rejects with an Error of type DOMException, with name AbortError.
    */
    if (isDomExceptionSupported) {
        return new DOMException(signal?.reason ?? 'The operation was aborted.', 'AbortError');
    }
    // DOMException not supported. Fall back to use of error and override name.
    const error = new Error(signal?.reason ?? 'The operation was aborted.');
    error.name = 'AbortError';
    return error;
}
exports.composeAbortError = composeAbortError;
class HTTPError extends Error {
    constructor(response, request, options) {
        const code = (response.status || response.status === 0) ? response.status : '';
        const title = response.statusText || '';
        const status = `${code} ${title}`.trim();
        const reason = status ? `status code ${status}` : 'an unknown error';
        super(`Request failed with ${reason}`);
        this.name = 'HTTPError';
        this.response = response;
        this.request = request;
        this.options = options;
    }
}
exports.HTTPError = HTTPError;
class TimeoutError extends Error {
    constructor(request) {
        super('Request timed out');
        this.name = 'TimeoutError';
        this.request = request;
    }
}
exports.TimeoutError = TimeoutError;
async function delay(ms, { signal }) {
    return new Promise((resolve, reject) => {
        if (signal) {
            if (signal.aborted) {
                reject(composeAbortError(signal));
                return;
            }
            signal.addEventListener('abort', handleAbort, { once: true });
        }
        function handleAbort() {
            reject(composeAbortError(signal));
            clearTimeout(timeoutId);
        }
        const timeoutId = setTimeout(() => {
            signal?.removeEventListener('abort', handleAbort);
            resolve();
        }, ms);
    });
}
exports.delay = delay;
const isObject = (value) => value !== null && typeof value === 'object';
exports.isObject = isObject;
const validateAndMerge = (...sources) => {
    for (const source of sources) {
        if ((!(0, exports.isObject)(source) || Array.isArray(source)) && source !== undefined) {
            throw new TypeError('The `options` argument must be an object');
        }
    }
    return (0, exports.deepMerge)({}, ...sources);
};
exports.validateAndMerge = validateAndMerge;
const mergeHeaders = (source1 = {}, source2 = {}) => {
    const result = new globalThis.Headers(source1);
    const isHeadersInstance = source2 instanceof globalThis.Headers;
    const source = new globalThis.Headers(source2);
    // @ts-ignore
    for (const [key, value] of source.entries()) {
        if ((isHeadersInstance && value === 'undefined') || value === undefined) {
            result.delete(key);
        }
        else {
            result.set(key, value);
        }
    }
    return result;
};
exports.mergeHeaders = mergeHeaders;
const deepMerge = (...sources) => {
    let returnValue = {};
    let headers = {};
    for (const source of sources) {
        if (Array.isArray(source)) {
            if (!Array.isArray(returnValue)) {
                returnValue = [];
            }
            returnValue = [...returnValue, ...source];
        }
        else if ((0, exports.isObject)(source)) {
            for (let [key, value] of Object.entries(source)) {
                if ((0, exports.isObject)(value) && key in returnValue) {
                    value = (0, exports.deepMerge)(returnValue[key], value);
                }
                returnValue = { ...returnValue, [key]: value };
            }
            if ((0, exports.isObject)(source.headers)) {
                headers = (0, exports.mergeHeaders)(headers, source.headers);
                returnValue.headers = headers;
            }
        }
    }
    return returnValue;
};
exports.deepMerge = deepMerge;
const normalizeRequestMethod = (input) => exports.requestMethods.includes(input) ? input.toUpperCase() : input;
exports.normalizeRequestMethod = normalizeRequestMethod;
const retryMethods = ['get', 'put', 'head', 'delete', 'options', 'trace'];
const retryStatusCodes = [408, 413, 429, 500, 502, 503, 504];
const retryAfterStatusCodes = [413, 429, 503];
const defaultRetryOptions = {
    limit: 2,
    methods: retryMethods,
    statusCodes: retryStatusCodes,
    afterStatusCodes: retryAfterStatusCodes,
    maxRetryAfter: Number.POSITIVE_INFINITY,
    backoffLimit: Number.POSITIVE_INFINITY
};
const normalizeRetryOptions = (retry = {}) => {
    if (typeof retry === 'number') {
        return {
            ...defaultRetryOptions,
            limit: retry
        };
    }
    if (retry.methods && !Array.isArray(retry.methods)) {
        throw new Error('retry.methods must be an array');
    }
    if (retry.statusCodes && !Array.isArray(retry.statusCodes)) {
        throw new Error('retry.statusCodes must be an array');
    }
    return {
        ...defaultRetryOptions,
        ...retry,
        afterStatusCodes: retryAfterStatusCodes
    };
};
exports.normalizeRetryOptions = normalizeRetryOptions;
async function timeout(request, abortController, options) {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            if (abortController) {
                abortController.abort();
            }
            reject(new TimeoutError(request));
        }, options.timeout);
        options
            .fetch(request)
            .then(resolve)
            .catch(reject)
            .then(() => {
            clearTimeout(timeoutId);
        });
    });
}
exports.timeout = timeout;
exports.supportsRequestStreams = (() => {
    let duplexAccessed = false;
    let hasContentType = false;
    const supportsReadableStream = typeof globalThis.ReadableStream === 'function';
    const supportsRequest = typeof globalThis.Request === 'function';
    if (supportsReadableStream && supportsRequest) {
        hasContentType = new globalThis.Request('https://empty.invalid', {
            body: new globalThis.ReadableStream(),
            method: 'POST',
            // @ts-expect-error - Types are outdated.
            get duplex() {
                duplexAccessed = true;
                return 'half';
            }
        }).headers.has('Content-Type');
    }
    return duplexAccessed && !hasContentType;
})();
exports.supportsAbortController = typeof globalThis.AbortController === 'function';
exports.supportsResponseStreams = typeof globalThis.ReadableStream === 'function';
exports.supportsFormData = typeof globalThis.FormData === 'function';
exports.requestMethods = ['get', 'post', 'put', 'patch', 'head', 'delete'];
const validate = () => undefined;
validate();
exports.responseTypes = {
    json: 'application/json',
    text: 'text/*',
    formData: 'multipart/form-data',
    arrayBuffer: '*/*',
    blob: '*/*'
};
// The maximum value of a 32bit int (see issue #117)
exports.maxSafeTimeout = 2147483647;
exports.stop = Symbol('stop');
class HttpClient {
    static create(input, options) {
        const client = new HttpClient(input, options);
        const fn = async () => {
            if (typeof client._options.timeout === 'number' && client._options.timeout > exports.maxSafeTimeout) {
                throw new RangeError(`The \`timeout\` option cannot be greater than ${exports.maxSafeTimeout}`);
            }
            // Delay the fetch so that body method shortcuts can set the Accept header
            await Promise.resolve();
            let response = await client._fetch();
            for (const hook of client._options.hooks.afterResponse) {
                const modifiedResponse = await hook(client.request, client._options, client._decorateResponse(response.clone()));
                if (modifiedResponse instanceof globalThis.Response) {
                    response = modifiedResponse;
                }
            }
            client._decorateResponse(response);
            if (!response.ok && client._options.throwHttpErrors) {
                let error = new HTTPError(response, client.request, client._options);
                for (const hook of client._options.hooks.beforeError) {
                    error = await hook(error);
                }
                throw error;
            }
            if (client._options.onDownloadProgress) {
                if (typeof client._options.onDownloadProgress !== 'function') {
                    throw new TypeError('The `onDownloadProgress` option must be a function');
                }
                if (!exports.supportsResponseStreams) {
                    throw new Error('Streams are not supported in your environment. `ReadableStream` is missing.');
                }
                return client._stream(response.clone(), client._options.onDownloadProgress);
            }
            return response;
        };
        // const isRetriableMethod = client._options.retry.methods.includes(client.request.method.toLowerCase())
        const result = fn(); // (isRetriableMethod ? client._retry(fn) : fn()) as ResponsePromise
        for (const [type, mimeType] of Object.entries(exports.responseTypes)) {
            result[type] = async () => {
                client.request.headers.set('accept', client.request.headers.get('accept') || mimeType);
                const awaitedResult = await result;
                const response = awaitedResult.clone();
                if (type === 'json') {
                    if (response.status === 204) {
                        return '';
                    }
                    const arrayBuffer = await response.clone().arrayBuffer();
                    const responseSize = arrayBuffer.byteLength;
                    if (responseSize === 0) {
                        return '';
                    }
                    if (options.parseJson) {
                        return options.parseJson(await response.text());
                    }
                }
                return response[type]();
            };
        }
        return result;
    }
    // eslint-disable-next-line complexity
    constructor(input, options = {}) {
        this._retryCount = 0;
        this._input = input;
        this._options = {
            // TODO: credentials can be removed when the spec change is implemented in all browsers. Context: https://www.chromestatus.com/feature/4539473312350208
            credentials: this._input.credentials || 'same-origin',
            ...options,
            headers: (0, exports.mergeHeaders)(this._input.headers, options.headers),
            hooks: (0, exports.deepMerge)({
                beforeRequest: [],
                beforeRetry: [],
                beforeError: [],
                afterResponse: []
            }, options.hooks),
            method: (0, exports.normalizeRequestMethod)(options.method ?? this._input.method),
            // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
            prefixUrl: String(options.prefixUrl || ''),
            retry: (0, exports.normalizeRetryOptions)(options.retry),
            throwHttpErrors: options.throwHttpErrors !== false,
            timeout: options.timeout ?? 10000,
            fetch: options.fetch ?? globalThis.fetch.bind(globalThis)
        };
        if (typeof this._input !== 'string' && !(this._input instanceof URL || this._input instanceof globalThis.Request)) {
            throw new TypeError('`input` must be a string, URL, or Request');
        }
        if (this._options.prefixUrl && typeof this._input === 'string') {
            if (this._input.startsWith('/')) {
                throw new Error('`input` must not begin with a slash when using `prefixUrl`');
            }
            if (!this._options.prefixUrl.endsWith('/')) {
                this._options.prefixUrl += '/';
            }
            this._input = this._options.prefixUrl + this._input;
        }
        if (exports.supportsAbortController) {
            this.abortController = new globalThis.AbortController();
            if (this._options.signal) {
                const originalSignal = this._options.signal;
                this._options.signal.addEventListener('abort', () => {
                    this.abortController.abort(originalSignal.reason);
                });
            }
            this._options.signal = this.abortController.signal;
        }
        if (exports.supportsRequestStreams) {
            // @ts-expect-error - Types are outdated.
            this._options.duplex = 'half';
        }
        this.request = new globalThis.Request(this._input, this._options);
        if (this._options.searchParams) {
            const textSearchParams = typeof this._options.searchParams === 'string'
                ? this._options.searchParams.replace(/^\?/, '')
                : new URLSearchParams(this._options.searchParams).toString();
            const searchParams = '?' + textSearchParams;
            const url = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, searchParams);
            // To provide correct form boundary, Content-Type header should be deleted each time when new Request instantiated from another one
            if (((exports.supportsFormData && this._options.body instanceof globalThis.FormData) ||
                this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers['content-type'])) {
                this.request.headers.delete('content-type');
            }
            // The spread of `this.request` is required as otherwise it misses the `duplex` option for some reason and throws.
            this.request = new globalThis.Request(new globalThis.Request(url, { ...this.request }), this._options);
        }
        if (this._options.json !== undefined) {
            this._options.body = JSON.stringify(this._options.json);
            this.request.headers.set('content-type', this._options.headers.get('content-type') ?? 'application/json');
            this.request = new globalThis.Request(this.request, { body: this._options.body });
        }
    }
    _calculateRetryDelay(error) {
        this._retryCount++;
        if (this._retryCount < this._options.retry.limit && !(error instanceof TimeoutError)) {
            if (error instanceof HTTPError) {
                if (!this._options.retry.statusCodes.includes(error.response.status)) {
                    return 0;
                }
                const retryAfter = error.response.headers.get('Retry-After');
                if (retryAfter && this._options.retry.afterStatusCodes.includes(error.response.status)) {
                    let after = Number(retryAfter);
                    if (Number.isNaN(after)) {
                        after = Date.parse(retryAfter) - Date.now();
                    }
                    else {
                        after *= 1000;
                    }
                    if (this._options.retry.maxRetryAfter !== undefined && after > this._options.retry.maxRetryAfter) {
                        return 0;
                    }
                    return after;
                }
                if (error.response.status === 413) {
                    return 0;
                }
            }
            const BACKOFF_FACTOR = 0.3;
            return Math.min(this._options.retry.backoffLimit, BACKOFF_FACTOR * (2 ** (this._retryCount - 1)) * 1000);
        }
        return 0;
    }
    _decorateResponse(response) {
        if (this._options.parseJson) {
            response.json = async () => this._options.parseJson(await response.text());
        }
        return response;
    }
    async _retry(fn) {
        try {
            return await fn();
        }
        catch (error) {
            const ms = Math.min(this._calculateRetryDelay(error), exports.maxSafeTimeout);
            if (ms !== 0 && this._retryCount > 0) {
                await delay(ms, { signal: this._options.signal });
                for (const hook of this._options.hooks.beforeRetry) {
                    // eslint-disable-next-line no-await-in-loop
                    const hookResult = await hook({
                        request: this.request,
                        options: this._options,
                        error: error,
                        retryCount: this._retryCount
                    });
                    // If `stop` is returned from the hook, the retry process is stopped
                    if (hookResult === exports.stop) {
                        return;
                    }
                }
                return this._retry(fn);
            }
            throw error;
        }
    }
    async _fetch() {
        for (const hook of this._options.hooks.beforeRequest) {
            // eslint-disable-next-line no-await-in-loop
            const result = await hook(this.request, this._options);
            if (result instanceof Request) {
                this.request = result;
                break;
            }
            if (result instanceof Response) {
                return result;
            }
        }
        if (this._options.timeout === false) {
            return this._options.fetch(this.request.clone());
        }
        return timeout(this.request.clone(), this.abortController, this._options);
    }
    /* istanbul ignore next */
    _stream(response, onDownloadProgress) {
        const totalBytes = Number(response.headers.get('content-length')) || 0;
        let transferredBytes = 0;
        if (response.status === 204) {
            if (onDownloadProgress) {
                onDownloadProgress({ percent: 1, totalBytes, transferredBytes }, new Uint8Array());
            }
            return new globalThis.Response(null, {
                status: response.status,
                statusText: response.statusText,
                headers: response.headers
            });
        }
        return new globalThis.Response(new globalThis.ReadableStream({
            async start(controller) {
                const reader = response.body.getReader();
                if (onDownloadProgress) {
                    onDownloadProgress({ percent: 0, transferredBytes: 0, totalBytes }, new Uint8Array());
                }
                async function read() {
                    const { done, value } = await reader.read();
                    if (done) {
                        controller.close();
                        return;
                    }
                    if (onDownloadProgress) {
                        transferredBytes += value.byteLength;
                        const percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
                        onDownloadProgress({ percent, transferredBytes, totalBytes }, value);
                    }
                    controller.enqueue(value);
                    await read();
                }
                await read();
            }
        }), {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
        });
    }
}
exports.HttpClient = HttpClient;
const createInstance = (defaults) => {
    const client = (input, options) => HttpClient.create(input, (0, exports.validateAndMerge)(defaults, options));
    for (const method of exports.requestMethods) {
        client[method] = (input, options) => {
            return HttpClient.create(input, (0, exports.validateAndMerge)(defaults, options, { method }));
        };
    }
    client.create = (newDefaults) => createInstance((0, exports.validateAndMerge)(newDefaults));
    client.extend = (newDefaults) => createInstance((0, exports.validateAndMerge)(defaults, newDefaults));
    client.stop = exports.stop;
    return client;
};
exports.httpClient = createInstance();
