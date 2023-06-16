import { AxiosBasicCredentials, AxiosInstance, AxiosResponse } from "axios";
import { TaskDefinitionsMap, TaskDefinitionsNameMap, WorkflowDefinitionsMap, ResourceTypeMap, SearchParams, SubsSubscription } from "./types";
type PathResourceBody<T extends keyof ResourceTypeMap> = Partial<Omit<ResourceTypeMap[T], "id" | "meta">>;
type SetOptional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
export type UnnecessaryKeys = "contained" | "extension" | "modifierExtension" | "_id" | "meta" | "implicitRules" | "_implicitRules" | "language" | "_language";
type Dir = "asc" | "desc";
export type PrefixWithArray = "eq" | "ne";
export type Prefix = "eq" | "ne" | "gt" | "lt" | "ge" | "le" | "sa" | "eb" | "ap";
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
    "count-query": string;
};
type Link = {
    relation: string;
    url: string;
};
export type BaseResponseResources<T extends keyof ResourceTypeMap> = {
    "query-time": number;
    meta: {
        versionId: string;
    };
    type: string;
    resourceType: string;
    total: number;
    link: Link[];
    "query-timeout": number;
    entry: {
        resource: ResourceTypeMap[T];
    }[];
    "query-sql": (string | number)[];
};
export type BaseResponseResource<T extends keyof ResourceTypeMap> = ResourceTypeMap[T];
export type ResourceKeys<T extends keyof ResourceTypeMap, I extends ResourceTypeMap[T]> = Omit<I, UnnecessaryKeys>;
type SortKey<T extends keyof ResourceTypeMap> = keyof SearchParams[T] | `.${string}`;
type ElementsParams<T extends keyof ResourceTypeMap, R extends ResourceTypeMap[T]> = Array<keyof ResourceKeys<T, R>>;
type ChangeFields<T, R> = Omit<T, keyof R> & R;
type SubscriptionParams = Omit<ChangeFields<SubsSubscription, {
    channel: Omit<SubsSubscription["channel"], "type">;
}>, "resourceType"> & {
    id: string;
};
type BundleRequestEntry<T = ResourceTypeMap[keyof ResourceTypeMap]> = {
    request: {
        method: string;
        url: string;
    };
    resource?: T;
};
type BundleRequestResponse<T = ResourceTypeMap[keyof ResourceTypeMap]> = {
    type: "transaction-response";
    resourceType: "Bundle";
    entry: Array<T>;
};
export type LogData = {
    message: Record<string, any>;
    type: string;
    v?: string;
    fx?: string;
};
export declare class Client {
    client: AxiosInstance;
    constructor(baseURL: string, credentials: AxiosBasicCredentials);
    getResources<T extends keyof ResourceTypeMap>(resourceName: T): GetResources<T, ResourceTypeMap[T]>;
    getResource<T extends keyof ResourceTypeMap>(resourceName: T, id: string): Promise<BaseResponseResource<T>>;
    deleteResource<T extends keyof ResourceTypeMap>(resourceName: T, id: string): Promise<BaseResponseResource<T>>;
    createQuery(name: string, body: CreateQueryBody): Promise<any>;
    executeQuery<T>(name: string, params?: Record<string, unknown>): Promise<AxiosResponse<ExecuteQueryResponseWrapper<T>>>;
    patchResource<T extends keyof ResourceTypeMap>(resourceName: T, id: string, body: PathResourceBody<T>): Promise<BaseResponseResource<T>>;
    createResource<T extends keyof ResourceTypeMap>(resourceName: T, body: SetOptional<ResourceTypeMap[T], "resourceType">): Promise<BaseResponseResource<T>>;
    rawSQL(sql: string, params?: unknown[]): Promise<any>;
    createSubscription({ id, status, trigger, channel, }: SubscriptionParams): Promise<SubsSubscription>;
    subscriptionEntry({ id, status, trigger, channel, }: SubscriptionParams): SubsSubscription & {
        id: string;
        resourceType: "SubsSubscription";
    };
    sendLog(data: LogData): Promise<void>;
    transformToBundle<RT extends keyof ResourceTypeMap, R extends ResourceTypeMap[RT]>(resources: (R & {
        resourceType: RT;
        id: string;
    })[], method: "PUT" | "PATCH"): BundleRequestEntry<R>[];
    transformToBundle<RT extends keyof ResourceTypeMap, R extends ResourceTypeMap[RT]>(resources: (R & {
        resourceType: RT;
        id?: string;
    })[], method: "POST"): BundleRequestEntry<R>[];
    bundleRequest(entry: Array<BundleRequestEntry>, type?: "transaction" | "batch"): Promise<BundleRequestResponse>;
}
export declare class GetResources<T extends keyof ResourceTypeMap, R extends ResourceTypeMap[T]> implements PromiseLike<BaseResponseResources<T>> {
    private searchParamsObject;
    resourceName: T;
    client: AxiosInstance;
    constructor(client: AxiosInstance, resourceName: T);
    where<K extends keyof SearchParams[T], SP extends SearchParams[T][K], PR extends PrefixWithArray>(key: K | string, value: SP | SP[], prefix?: PR): this;
    where<K extends keyof SearchParams[T], SP extends SearchParams[T][K], PR extends Exclude<Prefix, PrefixWithArray>>(key: K | string, value: SP, prefix?: PR): this;
    contained(contained: boolean | "both", containedType?: "container" | "contained"): this;
    count(value: number): this;
    elements(args: ElementsParams<T, R>): this;
    summary(type: boolean | "text" | "data" | "count"): this;
    sort(key: SortKey<T>, dir: Dir): this;
    then<TResult1 = BaseResponseResources<T>, TResult2 = never>(onfulfilled?: ((value: BaseResponseResources<T>) => PromiseLike<TResult1> | TResult1) | undefined | null, onrejected?: ((reason: any) => PromiseLike<TResult2> | TResult2) | undefined | null): PromiseLike<TResult1 | TResult2>;
}
type EventType = "awf.workflow.event/workflow-init" | "awf.workflow.event/task-completed";
type TaskStatus = "requested" | "in-progress";
type RequesterType = "AidboxWorkflow";
interface Meta<T> {
    id: string;
    execId: string;
    definition: string;
    params: T;
    "workflow-definition": string;
    resourceType: "AidboxTask";
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
type TaskInput = TaskDefinitionsMap[keyof TaskDefinitionsMap]["params"];
type DecisionInput = {
    event: EventType;
};
interface TasksBatch {
    result: {
        resources: Array<Meta<TaskInput | DecisionInput>>;
    };
}
interface WorkflowActions<K extends keyof WorkflowDefinitionsMap> {
    complete: (params: WorkflowDefinitionsMap[K]["result"]) => {
        action: "awf.workflow.action/complete-workflow";
        result: WorkflowDefinitionsMap[K]["result"];
    };
    execute: <T extends keyof TaskDefinitionsMap>(params: {
        definition: T;
        params: TaskDefinitionsMap[T]["params"];
    }) => {
        action: "awf.workflow.action/schedule-task";
        "task-request": {
            definition: (typeof TaskDefinitionsNameMap)[T];
            params: TaskDefinitionsMap[T]["params"];
        };
    };
    fail: (params: any) => {
        action: "awf.workflow.action/fail";
        error: any;
    };
}
type TaskHandler<K extends keyof TaskDefinitionsMap> = (params: Meta<TaskDefinitionsMap[K]["params"]>) => Promise<TaskDefinitionsMap[K]["result"]> | TaskDefinitionsMap[K]["result"];
type WorkflowHandler<K extends keyof WorkflowDefinitionsMap> = (params: Meta<DecisionInput>, actions: WorkflowActions<K>) => void;
export declare class Engine {
    private readonly client;
    private readonly workers;
    constructor(baseURL: string, credentials: AxiosBasicCredentials);
    task: {
        execute: <K extends never>(definition: K, params: TaskDefinitionsMap[K]["params"]) => Promise<AxiosResponse<TasksBatch>>;
        implement: <K_1 extends never>(name: K_1, handler: TaskHandler<K_1>, options?: WorkerOptions) => void;
    };
    workflow: {
        execute: <K extends never>(name: K, params: WorkflowDefinitionsMap[K]["params"]) => Promise<AxiosResponse<TasksBatch>>;
        implement: <W extends never>(name: W, handler: WorkflowHandler<W>, options?: WorkerOptions) => void;
    };
    runDaemon(poll: () => Promise<Array<Meta<TaskInput | DecisionInput>>>, handler: (input: any) => any, options: WorkerOptions): Promise<void>;
    wrapHandler<W extends keyof WorkflowDefinitionsMap>(handler: WorkflowHandler<W>): (params: Meta<DecisionInput>) => void;
    createHandler<T extends TaskInput | DecisionInput>(handler: (task: Meta<T>) => void): (task: Meta<T>) => Promise<void>;
    poll(params: {
        workflowDefinitions?: [string];
        taskDefinitions?: [string];
    }, options: WorkerOptions): Promise<Meta<DecisionInput>[]>;
    startTask(id: string, executionId: string): Promise<AxiosResponse<TasksBatch, any>> | undefined;
    completeTask(id: string, executionId: string, payload: unknown): Promise<AxiosResponse<TasksBatch, any>>;
    failTask(id: string, executionId: string, payload: unknown): Promise<AxiosResponse<TasksBatch, any>> | undefined;
    executeWorkflow<K extends keyof WorkflowDefinitionsMap>(name: K, params: WorkflowDefinitionsMap[K]["params"]): Promise<AxiosResponse<TasksBatch>>;
    executeTask<K extends keyof TaskDefinitionsMap>(definition: K, params: TaskDefinitionsMap[K]["params"]): Promise<AxiosResponse<TasksBatch>>;
}
export {};
