import { HttpClientInstance, HTTPError, Input, Options, NormalizedOptions } from './http-client';
import { TaskDefinitionsMap, WorkflowDefinitionsMap, ResourceTypeMap, SearchParams, SubsSubscription } from './types';
export { HTTPError };
export declare function decode(str: string): string;
export declare function encode(str: string): string;
export declare const sleep: (ms: number) => Promise<unknown>;
export declare const buildResourceUrl: (resource: string, id?: string) => string;
type PartialResourceBody<T extends keyof ResourceTypeMap> = Partial<Omit<ResourceTypeMap[T], 'id' | 'meta'>>;
type SetOptional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
export type UnnecessaryKeys = 'contained' | 'extension' | 'modifierExtension' | '_id' | 'meta' | 'implicitRules' | '_implicitRules' | 'language' | '_language';
type Dir = 'asc' | 'desc';
export type PrefixWithArray = 'eq' | 'ne';
export type Prefix = 'eq' | 'ne' | 'gt' | 'lt' | 'ge' | 'le' | 'sa' | 'eb' | 'ap';
export type ExecuteQueryResponseWrapper<T> = {
    data: T;
    query: string[];
    total: number;
};
export type CreateQueryParams = {
    isRequired: boolean;
    type: string;
    format?: string;
    default?: unknown;
};
export type CreateQueryBody = {
    params?: Record<string, CreateQueryParams>;
    query: string;
    'count-query': string;
};
type Link = {
    relation: string;
    url: string;
};
export type BaseResponseResources<T extends keyof ResourceTypeMap> = {
    meta: {
        versionId: string;
    };
    type: string;
    resourceType: string;
    total: number;
    link: Link[];
    entry?: {
        resource: ResourceTypeMap[T];
    }[];
    'query-timeout': number;
    'query-time': number;
    'query-sql': (string | number)[];
};
export type BaseResponseResource<T extends keyof ResourceTypeMap> = ResourceTypeMap[T];
export type ResourceKeys<T extends keyof ResourceTypeMap, I extends ResourceTypeMap[T]> = Omit<I, UnnecessaryKeys>;
type SortKey<T extends keyof ResourceTypeMap> = keyof SearchParams[T] | `.${string}`;
type ElementsParams<T extends keyof ResourceTypeMap, R extends ResourceTypeMap[T]> = Array<keyof ResourceKeys<T, R>>;
type ChangeFields<T, R> = Omit<T, keyof R> & R;
type SubscriptionParams = Omit<ChangeFields<SubsSubscription, {
    channel: Omit<SubsSubscription['channel'], 'type'>;
}>, 'resourceType'> & {
    id: string;
};
export type LogData = {
    message: Record<string, any>;
    type: string;
    v?: string;
    fx?: string;
};
export interface R<T> {
    response: {
        headers: Headers;
        url: string;
        status: number;
        data: T;
    };
}
export declare class E<T> extends Error {
    response: R<T>['response'];
    request: Request;
    options: NormalizedOptions;
    constructor(data: T, response: Response, request: Request, options: NormalizedOptions);
}
declare class Task {
    private readonly workers;
    private client;
    constructor(client: HttpClientInstance);
    cancel(id: string): Promise<TaskMeta<import("./types/task/SystemSendMessage").SystemSendMessageParams | {
        duration: {
            hours: number;
            minutes: number;
            seconds: number;
        };
        until?: undefined;
    } | {
        duration?: undefined;
        until: string;
    } | undefined>>;
    start(id: string, executionId: string): Promise<TasksBatch | undefined>;
    complete(id: string, executionId: string, payload: unknown): Promise<TasksBatch>;
    fail(id: string, executionId: string, payload: unknown): Promise<TasksBatch | undefined>;
    private execute;
    /**
     * Return number ready for execution tasks except Decisions task
     *
     * @param {string} [definition] - Task definition name
     * @returns {Promise<number>}
     *
     */
    pendingTasks(definition?: keyof TaskDefinitionsMap): Promise<number>;
    pendingDecisions(): Promise<number>;
    history(id: string): Promise<{
        resource: TaskMeta<TaskInput>;
        log: Record<string, any>[];
    }>;
    inProgress(): Promise<number>;
    createHandler<T extends TaskInput | DecisionInput>(handler: (task: TaskMeta<T>) => void): (task: TaskMeta<T>) => Promise<void>;
    poll(params: {
        workflowDefinitions?: [string];
        taskDefinitions?: [string];
    }, options: WorkerOptions): Promise<TaskMeta<import("./types/task/SystemSendMessage").SystemSendMessageParams | {
        duration: {
            hours: number;
            minutes: number;
            seconds: number;
        };
        until?: undefined;
    } | {
        duration?: undefined;
        until: string;
    } | DecisionInput | undefined>[]>;
    private runDaemon;
    implement<K extends keyof Omit<TaskDefinitionsMap, 'awf.task/wait'>>(name: K, handler: TaskHandler<K>, options?: WorkerOptions): void;
}
declare class Workflow {
    private readonly workers;
    private client;
    private task;
    constructor(client: HttpClientInstance, task: Task);
    private runDaemon;
    implement<W extends keyof WorkflowDefinitionsMap>(name: W, handler: WorkflowHandler<W>, options?: WorkerOptions): void;
    private wrapHandler;
    execute<K extends keyof WorkflowDefinitionsMap>(definition: K, params: WorkflowDefinitionsMap[K]['params']): Promise<TasksBatch>;
    terminate(id: string): Promise<AidboxWorkflow>;
    inProgress(): Promise<number>;
    history(id: string): Promise<{
        resource: AidboxWorkflow;
        activities: TaskMeta<import("./types/task/SystemSendMessage").SystemSendMessageParams | {
            duration: {
                hours: number;
                minutes: number;
                seconds: number;
            };
            until?: undefined;
        } | {
            duration?: undefined;
            until: string;
        } | undefined>;
    }>;
}
export interface TokenStorage {
    get: () => Promise<string | null> | string | null;
    set: (token: string | undefined) => Promise<void> | void;
}
type BasicAuthorization = {
    method: 'basic';
    credentials: {
        username: string;
        password: string;
    };
};
type ResourceOwnerAuthorization = {
    method: 'resource-owner';
    client: {
        id: string;
        secret: string;
    };
    storage: TokenStorage;
};
export declare class Client<T extends BasicAuthorization | ResourceOwnerAuthorization> {
    private client;
    private config;
    task: Task;
    workflow: Workflow;
    constructor(baseURL: string, config: {
        auth: T;
    });
    get auth(): (T & BasicAuthorization) | (T & {
        signIn: ({ username, password }: {
            username: string;
            password: string;
        }) => Promise<{
            access_token: string;
            token_type: "Bearer";
            userinfo: {
                email: string;
                id: string;
            };
        }>;
        signUp: () => void;
        signOut: () => void;
        method: "resource-owner";
        client: {
            id: string;
            secret: string;
        };
        storage: TokenStorage;
    });
    HTTPClient: () => {
        get: <T_1>(url: Input, options?: Options | undefined) => Promise<R<T_1>>;
        post: <T_1>(url: Input, options?: Options | undefined) => Promise<R<T_1>>;
        patch: <T_1>(url: Input, options?: Options | undefined) => Promise<R<T_1>>;
        put: <T_1>(url: Input, options?: Options | undefined) => Promise<R<T_1>>;
        delete: <T_1>(url: Input, options?: Options | undefined) => Promise<R<T_1>>;
        head: <T_1>(url: Input, options?: Options | undefined) => Promise<R<T_1>>;
    };
    resource: {
        list: <T_1 extends keyof ResourceTypeMap>(resourceName: T_1) => GetResources<T_1, ResourceTypeMap[T_1]>;
        get: <T_2 extends keyof ResourceTypeMap>(resourceName: T_2, id: string) => Promise<BaseResponseResource<T_2>>;
        delete: <T_3 extends keyof ResourceTypeMap>(resourceName: T_3, id: string) => Promise<BaseResponseResource<T_3>>;
        update: <T_4 extends keyof ResourceTypeMap>(resourceName: T_4, id: string, input: Partial<Omit<ResourceTypeMap[T_4], "id" | "meta">>) => Promise<BaseResponseResource<T_4>>;
        create: <T_5 extends keyof ResourceTypeMap>(resourceName: T_5, input: SetOptional<ResourceTypeMap[T_5] & {
            resourceType: string;
        }, "resourceType">) => Promise<BaseResponseResource<T_5>>;
        override: <T_6 extends keyof ResourceTypeMap>(resourceName: T_6, id: string, input: Partial<Omit<ResourceTypeMap[T_6], "id" | "meta">>) => Promise<BaseResponseResource<T_6>>;
    };
    rpc<T = any>(method: string, params: unknown): Promise<T>;
    aidboxQuery: {
        create: (name: string, json: CreateQueryBody) => Promise<unknown>;
        execute: <T_1>(name: string, params?: Record<string, unknown>) => Promise<ExecuteQueryResponseWrapper<T_1>>;
    };
    subsSubscription: {
        create: ({ id, status, trigger, channel, }: SubscriptionParams) => Promise<SubsSubscription>;
    };
    rawSQL<T>(sql: string, params?: string[]): Promise<T>;
    sendLog(data: LogData): Promise<void>;
}
export declare class GetResources<T extends keyof ResourceTypeMap, R extends ResourceTypeMap[T]> implements PromiseLike<BaseResponseResources<T>> {
    private searchParamsObject;
    resourceName: T;
    client: HttpClientInstance;
    constructor(client: HttpClientInstance, resourceName: T);
    where<K extends keyof SearchParams[T], SP extends SearchParams[T][K], PR extends PrefixWithArray>(key: K | string, value: SP | SP[], prefix?: PR): this;
    where<K extends keyof SearchParams[T], SP extends SearchParams[T][K], PR extends Exclude<Prefix, PrefixWithArray>>(key: K | string, value: SP, prefix?: PR): this;
    contained(contained: boolean | 'both', containedType?: 'container' | 'contained'): this;
    count(value: number): this;
    elements(args: ElementsParams<T, R>): this;
    summary(type: boolean | 'text' | 'data' | 'count'): this;
    sort(key: SortKey<T>, dir: Dir): this;
    then<TResult1 = BaseResponseResources<T>, TResult2 = never>(onfulfilled?: ((value: BaseResponseResources<T>) => PromiseLike<TResult1> | TResult1) | undefined | null, _onrejected?: ((reason: unknown) => PromiseLike<TResult2> | TResult2) | undefined | null): PromiseLike<TResult1 | TResult2>;
}
type EventType = 'awf.workflow.event/workflow-init' | 'awf.workflow.event/task-completed';
type TaskStatus = 'requested' | 'in-progress';
type RequesterType = 'AidboxWorkflow';
interface TaskMeta<T> {
    id: string;
    execId: string;
    definition: string;
    params: T;
    'workflow-definition': string;
    resourceType: 'AidboxTask';
    status: TaskStatus;
    requester: {
        id: string;
        resourceType: RequesterType;
    };
    meta: {
        lastUpdated: string;
        createdAt: string;
        versionId: string;
    };
}
type WorkerOptions = {
    pollInterval?: number;
    batchSize?: number;
};
type TaskInput = TaskDefinitionsMap[keyof TaskDefinitionsMap]['params'];
type DecisionInput = {
    event: EventType;
};
interface TasksBatch {
    result: {
        resources: Array<TaskMeta<TaskInput | DecisionInput>>;
    };
}
interface AidboxWorkflow {
    requester: {
        id: string;
        resourceType: string;
    };
    retryCount: number;
    execId: string;
    status: 'created' | 'in-progress' | 'done';
    outcome?: 'succeeded' | 'failed' | 'canceled';
    outcomeReason?: {
        type: 'awf.task/failed-due-to-in-progress-timeout' | 'awf.workflow/failed-by-executor' | 'awf.executor/unknown-error';
        message: string;
        data?: any;
    };
    result: any;
    error: any;
}
interface WorkflowActions<K extends keyof WorkflowDefinitionsMap> {
    complete: (params: WorkflowDefinitionsMap[K]['result']) => {
        action: 'awf.workflow.action/complete-workflow';
        result: WorkflowDefinitionsMap[K]['result'];
    };
    execute: <T extends keyof TaskDefinitionsMap>(params: {
        definition: T;
        params: TaskDefinitionsMap[T]['params'];
    }) => {
        action: 'awf.workflow.action/schedule-task';
        'task-request': {
            definition: T;
            params: TaskDefinitionsMap[T]['params'];
        };
    };
    fail: (params: unknown) => {
        action: 'awf.workflow.action/fail';
        error: unknown;
    };
}
type TaskHandler<K extends keyof Omit<TaskDefinitionsMap, 'awf.task/wait'>> = (params: TaskMeta<TaskDefinitionsMap[K]['params']>) => Promise<TaskDefinitionsMap[K]['result']> | TaskDefinitionsMap[K]['result'];
type WorkflowHandler<K extends keyof WorkflowDefinitionsMap> = (params: TaskMeta<DecisionInput>, actions: WorkflowActions<K>) => void;
type BundleRequestEntry<T = ResourceTypeMap[keyof ResourceTypeMap]> = {
    request: {
        method: string;
        url: string;
    };
    resource?: T;
};
export type HTTPMethod = 'POST' | 'PATCH' | 'PUT' | 'GET';
export declare class Bundle {
    entry: BundleRequestEntry[];
    type: 'batch' | 'transaction';
    constructor(type?: 'batch' | 'transaction');
    addEntry<T extends keyof ResourceTypeMap>(resource: ResourceTypeMap[T], { method, resourceName, id, }: {
        method: HTTPMethod;
        resourceName: T;
        id?: string;
    }): void;
    toJSON(): ResourceTypeMap['Bundle'];
    toString(): string;
}
