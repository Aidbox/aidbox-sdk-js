export type RetryOptions = {
    /**
    The number of times to retry failed requests.

    @default 2
    */
    limit?: number;
    /**
    The HTTP methods allowed to retry.

    @default ['get', 'put', 'head', 'delete', 'options', 'trace']
    */
    methods?: string[];
    /**
    The HTTP status codes allowed to retry.

    @default [408, 413, 429, 500, 502, 503, 504]
    */
    statusCodes?: number[];
    /**
    The HTTP status codes allowed to retry with a `Retry-After` header.

    @default [413, 429, 503]
    */
    afterStatusCodes?: number[];
    /**
    If the `Retry-After` header is greater than `maxRetryAfter`, the request will be canceled.

    @default Infinity
    */
    maxRetryAfter?: number;
    /**
    The upper limit of the delay per retry in milliseconds.
    To clamp the delay, set `backoffLimit` to 1000, for example.

    By default, the delay is calculated in the following way:

    ```
    0.3 * (2 ** (attemptCount - 1)) * 1000
    ```

    The delay increases exponentially.

    @default Infinity
    */
    backoffLimit?: number;
};
export declare function composeAbortError(signal?: AbortSignal): Error | DOMException;
export declare class HTTPError extends Error {
    response: Response;
    request: Request;
    options: NormalizedOptions;
    constructor(response: Response, request: Request, options: NormalizedOptions);
}
export declare class TimeoutError extends Error {
    request: Request;
    constructor(request: Request);
}
export type DelayOptions = {
    signal?: InternalOptions['signal'];
};
export declare function delay(ms: number, { signal }: DelayOptions): Promise<void>;
export declare const isObject: (value: unknown) => value is object;
export declare const validateAndMerge: (...sources: Array<Partial<Options> | undefined>) => Partial<Options>;
export declare const mergeHeaders: (source1?: HttpClientHeadersInit, source2?: HttpClientHeadersInit) => Headers;
export declare const deepMerge: <T>(...sources: (Partial<T> | undefined)[]) => T;
export declare const normalizeRequestMethod: (input: string) => string;
export declare const normalizeRetryOptions: (retry?: number | RetryOptions) => Required<RetryOptions>;
export type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};
export type ObjectEntries<T> = T extends ArrayLike<infer U> ? Array<[string, U]> : Array<{
    [K in keyof T]: [K, T[K]];
}[keyof T]>;
export type TimeoutOptions = {
    timeout: number;
    fetch: typeof fetch;
};
export declare function timeout(request: Request, abortController: AbortController | undefined, options: TimeoutOptions): Promise<Response>;
export type ResponsePromise = {
    arrayBuffer: () => Promise<ArrayBuffer>;
    blob: () => Promise<Blob>;
    formData: () => Promise<FormData>;
    /**
    Get the response body as JSON.
    */
    json: <T = unknown>() => Promise<T>;
    text: () => Promise<string>;
} & Promise<HttpClientResponse>;
export type Primitive = null | undefined | string | number | boolean | symbol | bigint;
export type Required<T, K extends keyof T = keyof T> = T & {
    [P in K]-?: T[P];
};
export type LiteralUnion<LiteralType extends BaseType, BaseType extends Primitive> = LiteralType | (BaseType & {
    _?: never;
});
export type HttpClientResponse = {
    json: <T = unknown>() => Promise<T>;
} & Response;
export declare const supportsRequestStreams: boolean;
export declare const supportsAbortController: boolean;
export declare const supportsResponseStreams: boolean;
export declare const supportsFormData: boolean;
export declare const requestMethods: readonly ["get", "post", "put", "patch", "head", "delete"];
export declare const responseTypes: {
    readonly json: "application/json";
    readonly text: "text/*";
    readonly formData: "multipart/form-data";
    readonly arrayBuffer: "*/*";
    readonly blob: "*/*";
};
export declare const maxSafeTimeout = 2147483647;
export declare const stop: unique symbol;
export type HttpClientInstance = {
    /**
    Fetch the given `url`.

    @param url - `Request` object, `URL` object, or URL string.
    @returns A promise with `Body` method added.

    */
    (url: Input, options?: Options): ResponsePromise;
    /**
    Fetch the given `url` using the option `{method: 'get'}`.

    @param url - `Request` object, `URL` object, or URL string.
    @returns A promise with `Body` methods added.
    */
    get: (url: Input, options?: Options) => ResponsePromise;
    /**
    Fetch the given `url` using the option `{method: 'post'}`.

    @param url - `Request` object, `URL` object, or URL string.
    @returns A promise with `Body` methods added.
    */
    post: (url: Input, options?: Options) => ResponsePromise;
    /**
    Fetch the given `url` using the option `{method: 'put'}`.

    @param url - `Request` object, `URL` object, or URL string.
    @returns A promise with `Body` methods added.
    */
    put: (url: Input, options?: Options) => ResponsePromise;
    /**
    Fetch the given `url` using the option `{method: 'delete'}`.

    @param url - `Request` object, `URL` object, or URL string.
    @returns A promise with `Body` methods added.
    */
    delete: (url: Input, options?: Options) => ResponsePromise;
    /**
    Fetch the given `url` using the option `{method: 'patch'}`.

    @param url - `Request` object, `URL` object, or URL string.
    @returns A promise with `Body` methods added.
    */
    patch: (url: Input, options?: Options) => ResponsePromise;
    /**
    Fetch the given `url` using the option `{method: 'head'}`.

    @param url - `Request` object, `URL` object, or URL string.
    @returns A promise with `Body` methods added.
    */
    head: (url: Input, options?: Options) => ResponsePromise;
    /**
    Create a new  instance with complete new defaults.

    @returns A new client instance.
    */
    create: (defaultOptions: Options) => HttpClientInstance;
    /**
    Create a new client instance with some defaults overridden with your own.

    In contrast to `client.create()`, `client.extend()` inherits defaults from its parent.

    @returns A new client instance.
    */
    extend: (defaultOptions: Options) => HttpClientInstance;
    /**
    A `Symbol` that can be returned by a `beforeRetry` hook to stop the retry. This will also short circuit the remaining `beforeRetry` hooks.

    Note: Returning this symbol makes client abort and return with an `undefined` response. Be sure to check for a response before accessing any properties on it or use [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining). It is also incompatible with body methods, such as `.json()` or `.text()`, because there is no response to parse. In general, we recommend throwing an error instead of returning this symbol, as that will cause client to abort and then throw, which avoids these limitations.

    A valid use-case for `client.stop` is to prevent retries when making requests for side effects, where the returned data is not important. For example, logging client activity to the server.

    */
    readonly stop: typeof stop;
};
export type BeforeRequestHook = (request: Request, options: NormalizedOptions) => Request | Response | void | Promise<Request | Response | void>;
export type BeforeRetryState = {
    request: Request;
    options: NormalizedOptions;
    error: Error;
    retryCount: number;
};
export type BeforeRetryHook = (options: BeforeRetryState) => typeof stop | void | Promise<typeof stop | void>;
export type AfterResponseHook = (request: Request, options: NormalizedOptions, response: Response) => Response | void | Promise<Response | void>;
export type BeforeErrorHook = (error: HTTPError) => HTTPError | Promise<HTTPError>;
export type Hooks = {
    /**
    This hook enables you to modify the request right before it is sent. client will make no further changes to the request after this. The hook function receives normalized input and options as arguments. You could, forf example, modiy `options.headers` here.

    A [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from this hook to completely avoid making a HTTP request. This can be used to mock a request, check an internal cache, etc. An **important** consideration when returning a `Response` from this hook is that all the following hooks will be skipped, so **ensure you only return a `Response` from the last hook**.

    @default []
    */
    beforeRequest?: BeforeRequestHook[];
    /**
    This hook enables you to modify the request right before retry. client will make no further changes to the request after this. The hook function receives an object with the normalized request and options, an error instance, and the retry count. You could, for example, modify `request.headers` here.

    If the request received a response, the error will be of type `HTTPError` and the `Response` object will be available at `error.response`. Be aware that some types of errors, such as network errors, inherently mean that a response was not received. In that case, the error will not be an instance of `HTTPError`.

    You can prevent client from retrying the request by throwing an error. client will not handle it in any way and the error will be propagated to the request initiator. The rest of the `beforeRetry` hooks will not be called in this case. Alternatively, you can return the [`client.stop`](#client.stop) symbol to do the same thing but without propagating an error (this has some limitations, see `client.stop` docs for details).

    @default []
    */
    beforeRetry?: BeforeRetryHook[];
    /**
    This hook enables you to read and optionally modify the response. The hook function receives normalized input, options, and a clone of the response as arguments. The return value of the hook function will be used by client as the response object if it's an instance of [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response).

    @default []

    */
    afterResponse?: AfterResponseHook[];
    /**
    This hook enables you to modify the `HTTPError` right before it is thrown. The hook function receives a `HTTPError` as an argument and should return an instance of `HTTPError`.

    @default []

    @example
    ```
    import client from 'client';

    await client('https://example.com', {
        hooks: {
            beforeError: [
                error => {
                    const {response} = error;
                    if (response && response.body) {
                        error.name = 'GitHubError';
                        error.message = `${response.body.message} (${response.status})`;
                    }

                    return error;
                }
            ]
        }
    });
    ```
    */
    beforeError?: BeforeErrorHook[];
};
export type SearchParamsInit = string | string[][] | Record<string, string> | URLSearchParams | undefined;
export type SearchParamsOption = SearchParamsInit | Record<string, string | number | boolean> | Array<Array<string | number | boolean>>;
export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'head' | 'delete';
export type Input = string | URL | Request;
export type DownloadProgress = {
    percent: number;
    transferredBytes: number;
    /**
    Note: If it's not possible to retrieve the body size, it will be `0`.
    */
    totalBytes: number;
};
export type HttpClientHeadersInit = HeadersInit | Record<string, string | undefined>;
/**
Options are the same as `window.fetch`, with some exceptions.
*/
export type Options = {
    /**
    HTTP method used to make the request.

    Internally, the standard methods (`GET`, `POST`, `PUT`, `PATCH`, `HEAD` and `DELETE`) are uppercased in order to avoid server errors due to case sensitivity.
    */
    method?: LiteralUnion<HttpMethod, string>;
    /**
    HTTP headers used to make the request.

    You can pass a `Headers` instance or a plain object.

    You can remove a header with `.extend()` by passing the header with an `undefined` value.

    ```
    */
    headers?: HttpClientHeadersInit;
    /**
    Shortcut for sending JSON. Use this instead of the `body` option.

    Accepts any plain object or value, which will be `JSON.stringify()`'d and sent in the body with the correct header set.
    */
    json?: unknown;
    /**
    User-defined JSON-parsing function.

    Use-cases:
    1. Parse JSON via the [`bourne` package](https://github.com/hapijs/bourne) to protect from prototype pollution.
    2. Parse JSON with [`reviver` option of `JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).

    @default JSON.parse()

    ```
    */
    parseJson?: (text: string) => unknown;
    /**
    Search parameters to include in the request URL. Setting this will override all existing search parameters in the input URL.

    Accepts any value supported by [`URLSearchParams()`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams).
    */
    searchParams?: SearchParamsOption;
    /**
    A prefix to prepend to the `input` URL when making the request. It can be any valid URL, either relative or absolute. A trailing slash `/` is optional and will be added automatically, if needed, when it is joined with `input`. Only takes effect when `input` is a string. The `input` argument cannot start with a slash `/` when using this option.

    Useful when used with [`client.extend()`](#clientextenddefaultoptions) to create niche-specific client-instances.

    Notes:
     - After `prefixUrl` and `input` are joined, the result is resolved against the [base URL](https://developer.mozilla.org/en-US/docs/Web/API/Node/baseURI) of the page (if any).
     - Leading slashes in `input` are disallowed when using this option to enforce consistency and avoid confusion about how the `input` URL is handled, given that `input` will not follow the normal URL resolution rules when `prefixUrl` is being used, which changes the meaning of a leading slash.

    */
    prefixUrl?: URL | string;
    /**
    An object representing `limit`, `methods`, `statusCodes` and `maxRetryAfter` fields for maximum retry count, allowed methods, allowed status codes and maximum [`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) time.

    If `retry` is a number, it will be used as `limit` and other defaults will remain in place.

    If `maxRetryAfter` is set to `undefined`, it will use `options.timeout`. If [`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) header is greater than `maxRetryAfter`, it will cancel the request.

    Delays between retries is calculated with the function `0.3 * (2 ** (retry - 1)) * 1000`, where `retry` is the attempt number (starts from 1).

    Retries are not triggered following a timeout.

    */
    retry?: RetryOptions | number;
    /**
    Timeout in milliseconds for getting a response, including any retries. Can not be greater than 2147483647.
    If set to `false`, there will be no timeout.

    @default 10000
    */
    timeout?: number | false;
    /**
    Hooks allow modifications during the request lifecycle. Hook functions may be async and are run serially.
    */
    hooks?: Hooks;
    /**
    Throw an `HTTPError` when, after following redirects, the response has a non-2xx status code. To also throw for redirects instead of following them, set the [`redirect`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters) option to `'manual'`.

    Setting this to `false` may be useful if you are checking for resource availability and are expecting error responses.

    Note: If `false`, error responses are considered successful and the request will not be retried.

    @default true
    */
    throwHttpErrors?: boolean;
    /**
    Download progress event handler.

    @param chunk - Note: It's empty for the first call.

    */
    onDownloadProgress?: (progress: DownloadProgress, chunk: Uint8Array) => void;
    /**
    User-defined `fetch` function.
    Has to be fully compatible with the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) standard.

    Use-cases:
    1. Use custom `fetch` implementations like [`isomorphic-unfetch`](https://www.npmjs.com/package/isomorphic-unfetch).
    2. Use the `fetch` wrapper function provided by some frameworks that use server-side rendering (SSR).

    @default fetch

    */
    fetch?: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
} & Omit<RequestInit, 'headers'>;
export type InternalOptions = Required<Omit<Options, 'hooks' | 'retry'>, 'credentials' | 'fetch' | 'prefixUrl' | 'timeout'> & {
    headers: Required<Headers>;
    hooks: Required<Hooks>;
    retry: Required<RetryOptions>;
    prefixUrl: string;
};
/**
Normalized options passed to the `fetch` call and the `beforeRequest` hooks.
*/
export type NormalizedOptions = {
    method: RequestInit['method'];
    credentials: RequestInit['credentials'];
    retry: RetryOptions;
    prefixUrl: string;
    onDownloadProgress: Options['onDownloadProgress'];
} & RequestInit;
export declare class HttpClient {
    static create(input: Input, options: Options): ResponsePromise;
    request: Request;
    protected abortController?: AbortController;
    protected _retryCount: number;
    protected _input: Input;
    protected _options: InternalOptions;
    constructor(input: Input, options?: Options);
    protected _calculateRetryDelay(error: unknown): number;
    protected _decorateResponse(response: Response): Response;
    protected _retry<T extends (...args: any) => Promise<any>>(fn: T): Promise<ReturnType<T> | void>;
    protected _fetch(): Promise<Response>;
    protected _stream(response: Response, onDownloadProgress: Options['onDownloadProgress']): Response;
}
export declare const httpClient: HttpClientInstance;
