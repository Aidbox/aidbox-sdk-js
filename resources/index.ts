import http, { HttpClientInstance } from './http-client'
import {
  TaskDefinitionsMap,
  WorkflowDefinitionsMap,
  ResourceTypeMap,
  SearchParams,
  SubsSubscription
} from './types'
import base64 from '@juanelas/base64'
import { fetch } from 'cross-fetch'

export function decode(str: string): string {
  return base64.decode(str, true).toString()
}

export function encode(str: string): string {
  return base64.encode(str)
}


export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
export const removeTrailingSlash = (str: string) => str.endsWith('/') ? str.slice(0, -1) : str;
export const addLeadingSlash = (str: string) => str.startsWith('/') ? str : "/" + str;

export const buildResourceUrl = (resource: string, id?: string) => ["fhir", resource, id && id].filter(Boolean).join("/")

type PartialResourceBody<T extends keyof ResourceTypeMap> = Partial<Omit<ResourceTypeMap[T], 'id' | 'meta'>>;

type SetOptional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type UnnecessaryKeys =
  | 'contained'
  | 'extension'
  | 'modifierExtension'
  | '_id'
  | 'meta'
  | 'implicitRules'
  | '_implicitRules'
  | 'language'
  | '_language';

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

type Link = { relation: string; url: string };

export type BaseResponseResources<T extends keyof ResourceTypeMap> = {
  'query-time': number;
  meta: { versionId: string };
  type: string;
  resourceType: string;
  total: number;
  link: Link[];
  'query-timeout': number;
  entry: {
    resource: ResourceTypeMap[T];
  }[];
  'query-sql': (string | number)[];
};

export type BaseResponseResource<T extends keyof ResourceTypeMap> = ResourceTypeMap[T];

export type ResourceKeys<T extends keyof ResourceTypeMap, I extends ResourceTypeMap[T]> = Omit<I, UnnecessaryKeys>;

type SortKey<T extends keyof ResourceTypeMap> = keyof SearchParams[T] | `.${string}`;

type ElementsParams<T extends keyof ResourceTypeMap, R extends ResourceTypeMap[T]> = Array<keyof ResourceKeys<T, R>>;

type ChangeFields<T, R> = Omit<T, keyof R> & R;
type SubscriptionParams = Omit<
  ChangeFields<
    SubsSubscription,
    {
      channel: Omit<SubsSubscription['channel'], 'type'>;
    }
  >,
  'resourceType'
> & { id: string };


export type LogData = {
  message: Record<string, any>;
  type: string;
  v?: string;
  fx?: string;
};


export const enum AuthMethod {
  Basic = "basic",
  ResourceOwner = "password"
}


export interface TokenStorage {
  get: () => Promise<string>,
  set: (token: string) => Promise<string>
}

export type ClientConfig = {
  baseUrl: string
  authMethod: AuthMethod.Basic
  username: string
  password: string

} |
{
  baseUrl: string
  authMethod: AuthMethod.ResourceOwner
  clientId: string
  clientSecret?: string
  storage: TokenStorage
}


interface JsonObject { [key: string]: JsonValue; }
type JsonPrimitive = string | number | boolean | null
type JsonValue = JsonPrimitive | JsonArray | JsonObject
type JsonArray = JsonValue[]

class Task {
  private readonly workers: Array<object>

  private client: HttpClientInstance
  constructor(client: HttpClientInstance) {
    this.client = client
    this.workers = []
  }

  async cancel(id: string) {
    const response = await this.client.post('/rpc', {
      json: {
        method: 'awf.task/cancel',
        params: { id }
      }
    }).json<TaskRpcResult>()

    return response.result.resource
  }

  async start(id: string, executionId: string) {
    try {
      return this.client.post('/rpc', {
        json: {
          method: 'awf.task/start',
          params: { id, execId: executionId }
        }
      }).json<TasksBatch>()
    } catch (error: any) {
      if (error.name === 'HTTPError') {
        const errorJson = await error.response.json();
        console.dir(errorJson, { depth: 5 })
      }
    }
  }


  async complete(id: string, executionId: string, payload: unknown) {
    return this.client.post('/rpc', {
      json: {
        method: 'awf.task/success',
        params: { id, execId: executionId, result: payload }
      }
    }).json<TasksBatch>()
  }

  async fail(id: string, executionId: string, payload: unknown) {
    try {
      return this.client.post('/rpc', {
        json: {
          method: 'awf.task/fail',
          params: { id, execId: executionId, result: payload }
        }
      }).json<TasksBatch>()
    } catch (error: any) {
      if (error.name === 'HTTPError') {
        const errorJson = await error.response.json();
        console.dir(errorJson, { depth: 5 })
      }
    }
  }

  private execute<K extends keyof TaskDefinitionsMap>(
    definition: K,
    params: TaskDefinitionsMap[K]['params']
  ): Promise<TasksBatch> {
    return this.client.post('/rpc', {
      json: {
        method: 'awf.task/create-and-execute',
        params: { definition, params }
      }
    }).json<TasksBatch>()
  }


  /**
   * Return number ready for execution tasks except Decisions task
   * 
   * @param {string} [definition] - Task definition name
   * @returns {Promise<number>} 
   * 
   */

  async pendingTasks(definition?: keyof TaskDefinitionsMap): Promise<number> {
    const params = new URLSearchParams({ "_count": "0", ".status": "ready", "definition-not": "awf.workflow/decision-task" })
    if (definition) {
      params.append("definition", definition)
      params.delete("definition-not")
    }
    return this.client.get('/AidboxTask', {
      searchParams: params
    }).json<{ total: number }>().then(r => r.total)
  }


  async pendingDecisions() {
    return this.client.get('/AidboxTask', {
      searchParams: new URLSearchParams({ "_count": "0", ".status": "ready", "definition": "awf.workflow/decision-task" })
    }).json<{ total: number }>().then(r => r.total)
  }

  async history(id: string) {
    return this.client.post('/rpc', {
      json: {
        method: 'awf.task/status',
        params: { id, 'include-log?': true }
      }
    }).json<{ result: { resource: TaskMeta<TaskInput>, log: Record<string, any>[] } }>().then(r => r.result)
  }


  async inProgress() {
    return this.client.get('/AidboxTask', {
      searchParams: new URLSearchParams({ "_count": "0", ".status": "in-progress" })
    }).json<{ total: number }>().then(r => r.total)
  }


  createHandler<T extends TaskInput | DecisionInput>(handler: (task: TaskMeta<T>) => void) {
    return async (task: TaskMeta<T>) => {
      await this.start(task.id, task.execId)

      try {
        const result = await handler(task)
        await this.complete(task.id, task.execId, result)
      } catch (error: any) {
        if (error.name === 'HTTPError') {
          const errorJson = await error.response.json();
          console.dir(errorJson, { depth: 5 })
          await this.fail(task.id, task.execId, errorJson)
        } else {
          console.dir(error, { depth: 5 })
          // for some reason does not fail the task
          await this.fail(task.id, task.execId, error)
        }
      }
    }
  }
  async poll(params: { workflowDefinitions?: [string]; taskDefinitions?: [string] }, options: WorkerOptions) {
    const tasksBatch = await this.client.post('/rpc', {
      json: {
        method: 'awf.task/poll',
        params: { ...params, maxBatchSize: options.batchSize }
      }
    }).json<TasksBatch>()

    return tasksBatch.result.resources
  }

  private async runDaemon(
    poll: () => Promise<Array<TaskMeta<TaskInput | DecisionInput>>>,
    handler: (input: any) => any,
    options: WorkerOptions
  ) {
    while (true) {
      const tasks = await poll()
      await Promise.allSettled(tasks.map(async (task) => handler(task)))
      await sleep(options.pollInterval || 1000)
    }
  }


  implement<K extends keyof Omit<TaskDefinitionsMap, 'awf.task/wait'>>(
    name: K,
    handler: TaskHandler<K>,
    options: WorkerOptions = {}
  ): void {
    const worker = this.runDaemon(
      () => this.poll({ taskDefinitions: [name] }, options),
      this.createHandler<TaskInput>(handler),
      options
    )
    this.workers.push(worker)
  }

}

class Workflow {
  private readonly workers: Array<object>

  private client: HttpClientInstance
  private task: Task
  constructor(client: HttpClientInstance, task: Task) {
    this.client = client;
    this.task = task;
    this.workers = []
  }


  private async runDaemon(
    poll: () => Promise<Array<TaskMeta<TaskInput | DecisionInput>>>,
    handler: (input: any) => any,
    options: WorkerOptions
  ) {
    while (true) {
      const tasks = await poll()
      await Promise.allSettled(tasks.map(async (task) => handler(task)))
      await sleep(options.pollInterval || 1000)
    }
  }

  implement<W extends keyof WorkflowDefinitionsMap>(
    name: W,
    handler: WorkflowHandler<W>,
    options: WorkerOptions = {}
  ): void {
    const worker = this.runDaemon(
      () => this.task.poll({ workflowDefinitions: [name] }, options),
      this.task.createHandler<DecisionInput>(this.wrapHandler<W>(handler)),
      options
    )
    this.workers.push(worker)
  }
  private wrapHandler<W extends keyof WorkflowDefinitionsMap>(handler: WorkflowHandler<W>) {
    return (params: TaskMeta<DecisionInput>) =>
      handler(params, {
        complete: (result: WorkflowDefinitionsMap[W]['result']) => ({
          action: 'awf.workflow.action/complete-workflow',
          result
        }),
        execute: <T extends keyof TaskDefinitionsMap>(params: {
          definition: T;
          params: TaskDefinitionsMap[T]['params'];
        }) => ({
          'action': 'awf.workflow.action/schedule-task',
          'task-request': { definition: params.definition, params: params.params }
        }),
        fail: (error: any) => ({ action: 'awf.workflow.action/fail', error })
      })
  }
  execute<K extends keyof WorkflowDefinitionsMap>(
    definition: K,
    params: WorkflowDefinitionsMap[K]['params']
  ): Promise<TasksBatch> {
    return this.client.post('/rpc', {
      json: {
        method: 'awf.workflow/create-and-execute',
        params: { definition, params }
      }
    }).json<TasksBatch>()
  }

  async terminate(id: string) {
    return this.client.post('/rpc', {
      json: {
        method: 'awf.workflow/cancel',
        params: { id }
      }
    }).json<WorkflowTerminateRpc>().then(r => r.result.resource)
  }

  async inProgress() {
    return this.client.get('/AidboxWorkflow', {
      searchParams: new URLSearchParams({ "_count": "0", ".status": "in-progress" })
    }).json<{ total: number }>().then(r => r.total)
  }

  async history(id: string) {
    return this.client.post('/rpc', {
      json: {
        method: 'awf.workflow/status',
        params: { id, 'include-activities?': true }
      }
    }).json<WorkflowHistoryRpc>().then(r => r.result)
  }

}


export class Client {
  private client: HttpClientInstance
  task: Task
  workflow: Workflow
  constructor(config: ClientConfig) {
    this.client = http.create({
      prefixUrl: removeTrailingSlash(config.baseUrl), fetch, hooks: {
        beforeRequest: [
          async (request) => {
            request.headers.set("Authorization", await (async function () {
              if (config.authMethod === AuthMethod.Basic) {
                return `Basic ${encode(`${config.username}:${config.password}`)}`
              }
              return `Bearer ${await config.storage.get()}`
            })())
          }
        ]
      }
    })
    const taskClient = new Task(this.client)
    this.task = taskClient
    this.workflow = new Workflow(this.client, taskClient)
  }

  getHttpClient() {
    return this.client
  }

  resource = {
    list: async  <T extends keyof ResourceTypeMap>(resourceName: T) => {
      return new GetResources(this.client, resourceName)
    },
    get: async <T extends keyof ResourceTypeMap>(resourceName: T, id: string): Promise<BaseResponseResource<T>> => {
      const response = await this.client.get(buildResourceUrl(resourceName, id)).json<BaseResponseResource<T>>()
      return response
    },
    delete: async <T extends keyof ResourceTypeMap>(resourceName: T, id: string): Promise<BaseResponseResource<T>> => {
      const response = await this.client.delete(buildResourceUrl(resourceName, id)).json<BaseResponseResource<T>>()
      return response
    },
    update: async<T extends keyof ResourceTypeMap>(
      resourceName: T,
      id: string,
      input: PartialResourceBody<T>
    ): Promise<BaseResponseResource<T>> => {
      const response = await this.client.patch(buildResourceUrl(resourceName, id), {
        json: input,
      }).json<BaseResponseResource<T>>()
      return response
    },
    create: async<T extends keyof ResourceTypeMap>(
      resourceName: T,
      input: SetOptional<ResourceTypeMap[T] & { resourceType: string }, 'resourceType'>
    ): Promise<BaseResponseResource<T>> => {
      const response = await this.client.post(buildResourceUrl(resourceName), {
        json: input,
      }).json<BaseResponseResource<T>>()

      return response
    },
    override: async<T extends keyof ResourceTypeMap>(
      resourceName: T,
      id: string,
      input: PartialResourceBody<T>
    ): Promise<BaseResponseResource<T>> => {
      const response = await this.client.put(buildResourceUrl(resourceName, id), {
        json: input,
      }).json<BaseResponseResource<T>>()
      return response
    }
  }

  async rpc<T = any>(method: string, params: any): Promise<T> {
    const response = await this.client.post("/rpc", {
      method: "POST",
      json: { method, params }
    })

    return response.json<T>()
  }
  aidboxQuery = {
    create: async (name: string, json: CreateQueryBody) => {
      const response = await this.client.put(`/AidboxQuery/${name}`, { json })
      return response.json()
    },
    execute: async <T>(name: string,
      params?: Record<string, unknown>) => {
      const queryParams = new URLSearchParams()
      if (params) {
        for (const key of Object.keys(params)) {
          const value = params[key]
          if (value) {
            queryParams.set(key, (value as any).toString())
          }
        }
      }
      return this.client.get(`/$query/${name}`, {
        searchParams: queryParams
      }).json<ExecuteQueryResponseWrapper<T>>()
    }
  }
  subsSubscription = {
    create: async ({ id, status, trigger, channel }: SubscriptionParams): Promise<SubsSubscription> => {
      const response = await this.client.put(`/SubsSubscription/${id}`, {
        json: {
          status,
          trigger,
          channel: { ...channel, type: 'rest-hook' }
        }
      })
      return response.json<SubsSubscription>()
    }
  }

  async rawSQL(sql: string, params?: unknown[]) {
    const body = [sql, ...(params?.map((value: any) => value?.toString()) ?? [])]

    const response = await this.client.post('/$sql', { json: body })
    return response.json()
  }


  async sendLog(data: LogData): Promise<void> {
    await this.client.post('$loggy', { json: data })
  }
}

export class GetResources<T extends keyof ResourceTypeMap, R extends ResourceTypeMap[T]>
  implements PromiseLike<BaseResponseResources<T>> {
  private searchParamsObject: URLSearchParams
  resourceName: T
  client: HttpClientInstance

  constructor(client: HttpClientInstance, resourceName: T) {
    this.searchParamsObject = new URLSearchParams()
    this.resourceName = resourceName
    this.client = client
  }

  where<K extends keyof SearchParams[T], SP extends SearchParams[T][K], PR extends PrefixWithArray>(
    key: K | string,
    value: SP | SP[],
    prefix?: PR,
  ): this;

  where<K extends keyof SearchParams[T], SP extends SearchParams[T][K], PR extends Exclude<Prefix, PrefixWithArray>>(
    key: K | string,
    value: SP,
    prefix?: PR,
  ): this;

  where<K extends keyof SearchParams[T], SP extends SearchParams[T][K], PR extends SP extends number ? Prefix : never>(
    key: K | string,
    value: SP | SP[],
    prefix?: Prefix | never
  ): this {
    if (Array.isArray(value)) {
      const val = value as SP[]
      if (prefix) {
        if (prefix === 'eq') {
          this.searchParamsObject.append(key.toString(), val.join(','))
          return this
        }

        val.forEach((item) => {
          this.searchParamsObject.append(key.toString(), `${prefix}${item}`)
        })

        return this
      }

      const queryValues = val.join(',')
      this.searchParamsObject.append(key.toString(), queryValues)

      return this
    }
    const queryValue = `${prefix ?? ''}${value}`

    this.searchParamsObject.append(key.toString(), queryValue)
    return this
  }

  contained(contained: boolean | 'both', containedType?: 'container' | 'contained') {
    this.searchParamsObject.set('_contained', contained.toString())

    if (containedType) {
      this.searchParamsObject.set('_containedType', containedType)
    }

    return this
  }

  count(value: number) {
    this.searchParamsObject.set('_count', value.toString())

    return this
  }

  elements(args: ElementsParams<T, R>) {
    const queryValue = args.join(',')

    this.searchParamsObject.set('_elements', queryValue)

    return this
  }

  summary(type: boolean | 'text' | 'data' | 'count') {
    this.searchParamsObject.set('_summary', type.toString())

    return this
  }

  sort(key: SortKey<T>, dir: Dir) {
    const existedSortParams = this.searchParamsObject.get('_sort')

    if (existedSortParams) {
      const newSortParams = `${existedSortParams},${dir === 'asc' ? '-' : ''}${key.toString()}`

      this.searchParamsObject.set('_sort', newSortParams)
      return this
    }

    this.searchParamsObject.set('_sort', dir === 'asc' ? `-${key.toString()}` : key.toString())

    return this
  }

  then<TResult1 = BaseResponseResources<T>, TResult2 = never>(
    onfulfilled?: ((value: BaseResponseResources<T>) => PromiseLike<TResult1> | TResult1) | undefined | null,
    _onrejected?: ((reason: unknown) => PromiseLike<TResult2> | TResult2) | undefined | null
  ): PromiseLike<TResult1 | TResult2> {
    return this.client.get(buildResourceUrl(this.resourceName), { searchParams: this.searchParamsObject })
      .then((response: any) => {
        return onfulfilled ? onfulfilled(response.json()) : (response.json() as TResult1)
      })
  }
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
  requester: { id: string; resourceType: RequesterType };
  meta: { lastUpdated: string; createdAt: string; versionId: string };
}

type WorkerOptions = {
  pollInterval?: number;
  batchSize?: number;
};

type TaskInput = TaskDefinitionsMap[keyof TaskDefinitionsMap]['params'];
type DecisionInput = { event: EventType };

interface TasksBatch {
  result: { resources: Array<TaskMeta<TaskInput | DecisionInput>> };
}

interface TaskRpcResult {
  result: { resource: TaskMeta<TaskInput> }
}

interface AidboxWorkflow {
  requester: { id: string, resourceType: string }
  retryCount: number
  execId: string
  status: "created" | "in-progress" | "done"
  outcome?: "succeeded" | "failed" | "canceled"
  outcomeReason?: {
    type: "awf.task/failed-due-to-in-progress-timeout" | "awf.workflow/failed-by-executor" | "awf.executor/unknown-error",
    message: string,
    data?: any
  }
  result: any
  error: any
}

interface WorkflowTerminateRpc {
  result: {
    resource: AidboxWorkflow
  }
}

interface WorkflowHistoryRpc {
  result: {
    resource: AidboxWorkflow,
    activities: TaskMeta<TaskInput>
  }
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
    'task-request': { definition: T; params: TaskDefinitionsMap[T]['params'] };
  };
  fail: (params: unknown) => { action: 'awf.workflow.action/fail'; error: unknown };
}

type TaskHandler<K extends keyof Omit<TaskDefinitionsMap, 'awf.task/wait'>> = (
  params: TaskMeta<TaskDefinitionsMap[K]['params']>,
) => Promise<TaskDefinitionsMap[K]['result']> | TaskDefinitionsMap[K]['result'];

type WorkflowHandler<K extends keyof WorkflowDefinitionsMap> = (
  params: TaskMeta<DecisionInput>,
  actions: WorkflowActions<K>,
) => void;


type BundleRequestEntry<T = ResourceTypeMap[keyof ResourceTypeMap]> = {
  request: { method: string; url: string };
  resource?: T;
};

export type HTTPMethod = "POST" | "PATCH" | "PUT" | "GET"

export class Bundle {
  entry: BundleRequestEntry[]
  type: "batch" | "transaction"

  constructor(type: "batch" | "transaction" = 'transaction') {
    this.type = type;
    this.entry = []
  }
  addEntry<T extends keyof ResourceTypeMap>(resource: ResourceTypeMap[T],
    { method, resourceName, id }: { method: HTTPMethod, resourceName: T, id?: string }) {
    this.entry.push({
      request: {
        method,
        url: buildResourceUrl(resourceName, id)
      }, resource: { ...resource, resourceType: resourceName }
    })

  }

  toJSON(): ResourceTypeMap['Bundle'] {
    return {
      resourceType: "Bundle",
      type: this.type,
      entry: this.entry
    }
  }

  toString() {
    return JSON.stringify({
      resourceType: "Bundle",
      type: this.type,
      entry: this.entry
    })
  }

}