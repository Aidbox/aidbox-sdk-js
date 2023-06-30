import axios, { AxiosBasicCredentials, AxiosError, AxiosInstance, AxiosResponse } from 'axios'

import {
  TaskDefinitionsMap,
  WorkflowDefinitionsMap,
  ResourceTypeMap,
  SearchParams,
  SubsSubscription
} from './types'

type PathResourceBody<T extends keyof ResourceTypeMap> = Partial<Omit<ResourceTypeMap[T], 'id' | 'meta'>>;

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

type BundleRequestEntry<T = ResourceTypeMap[keyof ResourceTypeMap]> = {
  request: { method: string; url: string };
  resource?: T;
};

type BundleRequestResponse<T = ResourceTypeMap[keyof ResourceTypeMap]> = {
  type: 'transaction-response';
  resourceType: 'Bundle';
  entry: Array<T>;
};

export type LogData = {
  message: Record<string, any>;
  type: string;
  v?: string;
  fx?: string;
};

function buildURL (url: string) {
  return '/fhir/' + url
}

export class Client {
  private readonly workers: Array<object>
  client: AxiosInstance

  constructor (baseURL: string, credentials: AxiosBasicCredentials) {
    this.workers = []
    this.client = axios.create({ baseURL: baseURL.endsWith('/') ? baseURL.slice(0, baseURL.length - 1) : baseURL, auth: credentials })
  }

  getResources<T extends keyof ResourceTypeMap> (resourceName: T) {
    return new GetResources(this.client, resourceName)
  }

  async getResource<T extends keyof ResourceTypeMap> (resourceName: T, id: string): Promise<BaseResponseResource<T>> {
    const response = await this.client.get<BaseResponseResource<T>>(buildURL(resourceName + '/' + id))
    return response.data
  }

  async deleteResource<T extends keyof ResourceTypeMap> (resourceName: T, id: string): Promise<BaseResponseResource<T>> {
    const response = await this.client.delete<BaseResponseResource<T>>(buildURL(resourceName + '/' + id))
    return response.data
  }

  async createQuery (name: string, body: CreateQueryBody) {
    const response = await this.client.put(`/AidboxQuery/${name}`, body)
    return response.data
  }

  async executeQuery<T> (
    name: string,
    params?: Record<string, unknown>
  ): Promise<AxiosResponse<ExecuteQueryResponseWrapper<T>>> {
    const queryParams = new URLSearchParams()
    if (params) {
      for (const key of Object.keys(params)) {
        const value = params[key]
        if (value) {
          queryParams.set(key, value.toString())
        }
      }
    }
    return this.client.get<ExecuteQueryResponseWrapper<T>>(`$query/${name}`, {
      params: queryParams
    })
  }

  async patchResource<T extends keyof ResourceTypeMap> (
    resourceName: T,
    id: string,
    body: PathResourceBody<T>
  ): Promise<BaseResponseResource<T>> {
    const response = await this.client.patch<BaseResponseResource<T>>(buildURL(resourceName + '/' + id), {
      ...body
    })
    return response.data
  }

  async createResource<T extends keyof ResourceTypeMap> (
    resourceName: T,
    // TODO: ResourceTypeMap contains not only resource
    body: SetOptional<ResourceTypeMap[T] & { resourceType: string }, 'resourceType'>
  ): Promise<BaseResponseResource<T>> {
    const response = await this.client.post<BaseResponseResource<T>>(buildURL(resourceName), { ...body })
    return response.data
  }

  async rawSQL (sql: string, params?: unknown[]) {
    const body = [sql, ...(params?.map((value) => value?.toString()) ?? [])]

    const response = await this.client.post('/$sql', body)
    return response.data
  }

  async createSubscription ({ id, status, trigger, channel }: SubscriptionParams): Promise<SubsSubscription> {
    const response = await this.client.put<SubsSubscription>(`SubsSubscription/${id}`, {
      status,
      trigger,
      channel: { ...channel, type: 'rest-hook' }
    })
    return response.data
  }

  subscriptionEntry ({
    id,
    status,
    trigger,
    channel
  }: SubscriptionParams): SubsSubscription & { id: string; resourceType: 'SubsSubscription' } {
    return {
      resourceType: 'SubsSubscription',
      id,
      status,
      trigger,
      channel: { ...channel, type: 'rest-hook' }
    }
  }

  async sendLog (data: LogData): Promise<void> {
    await this.client.post('/$loggy', data)
  }

  transformToBundle<RT extends keyof ResourceTypeMap, R extends ResourceTypeMap[RT]>(
    resources: (R & { resourceType: RT; id: string })[],
    method: 'PUT' | 'PATCH',
  ): BundleRequestEntry<R>[];

  transformToBundle<RT extends keyof ResourceTypeMap, R extends ResourceTypeMap[RT]>(
    resources: (R & { resourceType: RT; id?: string })[],
    method: 'POST',
  ): BundleRequestEntry<R>[];

  transformToBundle<RT extends keyof ResourceTypeMap, R extends ResourceTypeMap[RT]> (
    resources: (R & { resourceType: RT; id?: string })[],
    method: 'POST' | 'PUT' | 'PATCH'
  ): BundleRequestEntry<R>[] {
    return resources.map((resource) => ({
      request: {
        method,
        url: method === 'POST' ? `/${resource.resourceType}` : `/${resource.resourceType}/${resource.id}`
      },
      resource
    }))
  }

  async bundleRequest (
    entry: Array<BundleRequestEntry>,
    type: 'transaction' | 'batch' = 'transaction'
  ): Promise<BundleRequestResponse> {
    const response = await this.client.post('/', {
      resourceType: 'Bundle',
      type,
      entry
    })
    return response.data
  }

  task = {
    cancel: this.taskCancel.bind(this),
    execute: this.executeTask.bind(this),
    implement: <K extends keyof Omit<TaskDefinitionsMap, 'awf.task/wait'>>(
      name: K,
      handler: TaskHandler<K>,
      options: WorkerOptions = {}
    ): void => {
      const worker = this.runDaemon(
        () => this.poll({ taskDefinitions: [name] }, options),
        this.createHandler<TaskInput>(handler),
        options
      )
      this.workers.push(worker)
    }
  }

  workflow = {
    execute: this.executeWorkflow.bind(this),
    implement: <W extends keyof WorkflowDefinitionsMap>(
      name: W,
      handler: WorkflowHandler<W>,
      options: WorkerOptions = {}
    ): void => {
      const worker = this.runDaemon(
        () => this.poll({ workflowDefinitions: [name] }, options),
        this.createHandler<DecisionInput>(this.wrapHandler<W>(handler)),
        options
      )
      this.workers.push(worker)
    }
  }

  private async taskCancel (id: string) {
    const { data: task } = await this.client.post<Task>('/rpc', {
      method: 'awf.task/cancel',
      params: { id }
    })

    return task.result.resource
  }

  private async runDaemon (
    poll: () => Promise<Array<Meta<TaskInput | DecisionInput>>>,
    handler: (input: any) => any,
    options: WorkerOptions
  ) {
    while (true) {
      const tasks = await poll()
      await Promise.allSettled(tasks.map(async (task) => handler(task)))
      await sleep(options.pollInterval || 1000)
    }
  }

  private wrapHandler<W extends keyof WorkflowDefinitionsMap> (handler: WorkflowHandler<W>) {
    return (params: Meta<DecisionInput>) =>
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

  private createHandler<T extends TaskInput | DecisionInput> (handler: (task: Meta<T>) => void) {
    return async (task: Meta<T>) => {
      await this.startTask(task.id, task.execId)

      try {
        const result = await handler(task)
        await this.completeTask(task.id, task.execId, result)
      } catch (error) {
        console.dir((error as AxiosError)?.response?.data, { depth: 5 })
        // for some reason does not fail the task
        await this.failTask(task.id, task.execId, error)
      }
    }
  }

  private async poll (params: { workflowDefinitions?: [string]; taskDefinitions?: [string] }, options: WorkerOptions) {
    const { data: tasksBatch } = await this.client.post<TasksBatch>('/rpc', {
      method: 'awf.task/poll',
      params: { ...params, maxBatchSize: options.batchSize }
    })

    return tasksBatch.result.resources
  }

  private startTask (id: string, executionId: string) {
    try {
      return this.client.post<TasksBatch>('/rpc', {
        method: 'awf.task/start',
        params: { id, execId: executionId }
      })
    } catch (error) {
      console.dir((error as AxiosError)?.response?.data, { depth: 5 })
    }
  }

  private completeTask (id: string, executionId: string, payload: unknown) {
    return this.client.post<TasksBatch>('/rpc', {
      method: 'awf.task/success',
      params: { id, execId: executionId, result: payload }
    })
  }

  private failTask (id: string, executionId: string, payload: unknown) {
    try {
      return this.client.post<TasksBatch>('/rpc', {
        method: 'awf.task/fail',
        params: { id, execId: executionId, result: payload }
      })
    } catch (error) {
      console.dir((error as AxiosError)?.response?.data, { depth: 5 })
    }
  }

  private executeWorkflow<K extends keyof WorkflowDefinitionsMap> (
    definition: K,
    params: WorkflowDefinitionsMap[K]['params']
  ): Promise<AxiosResponse<TasksBatch>> {
    try {
      return this.client.post<TasksBatch>('/rpc', {
        method: 'awf.workflow/create-and-execute',
        params: { definition, params }
      })
    } catch (error) {
      throw (error as AxiosError)?.response
    }
  }

  private executeTask<K extends keyof TaskDefinitionsMap> (
    definition: K,
    params: TaskDefinitionsMap[K]['params']
  ): Promise<AxiosResponse<TasksBatch>> {
    try {
      return this.client.post<TasksBatch>('/rpc', {
        method: 'awf.task/create-and-execute',
        params: { definition, params }
      })
    } catch (error) {
      throw (error as AxiosError)?.response
    }
  }
}

export class GetResources<T extends keyof ResourceTypeMap, R extends ResourceTypeMap[T]>
implements PromiseLike<BaseResponseResources<T>> {
  private searchParamsObject: URLSearchParams
  resourceName: T
  client: AxiosInstance

  constructor (client: AxiosInstance, resourceName: T) {
    this.client = client
    this.searchParamsObject = new URLSearchParams()
    this.resourceName = resourceName
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

  where<K extends keyof SearchParams[T], SP extends SearchParams[T][K], PR extends SP extends number ? Prefix : never> (
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

  contained (contained: boolean | 'both', containedType?: 'container' | 'contained') {
    this.searchParamsObject.set('_contained', contained.toString())

    if (containedType) {
      this.searchParamsObject.set('_containedType', containedType)
    }

    return this
  }

  count (value: number) {
    this.searchParamsObject.set('_count', value.toString())

    return this
  }

  elements (args: ElementsParams<T, R>) {
    const queryValue = args.join(',')

    this.searchParamsObject.set('_elements', queryValue)

    return this
  }

  summary (type: boolean | 'text' | 'data' | 'count') {
    this.searchParamsObject.set('_summary', type.toString())

    return this
  }

  sort (key: SortKey<T>, dir: Dir) {
    const existedSortParams = this.searchParamsObject.get('_sort')

    if (existedSortParams) {
      const newSortParams = `${existedSortParams},${dir === 'asc' ? '-' : ''}${key.toString()}`

      this.searchParamsObject.set('_sort', newSortParams)
      return this
    }

    this.searchParamsObject.set('_sort', dir === 'asc' ? `-${key.toString()}` : key.toString())

    return this
  }

  then<TResult1 = BaseResponseResources<T>, TResult2 = never> (
    onfulfilled?: ((value: BaseResponseResources<T>) => PromiseLike<TResult1> | TResult1) | undefined | null,
    onrejected?: ((reason: unknown) => PromiseLike<TResult2> | TResult2) | undefined | null
  ): PromiseLike<TResult1 | TResult2> {
    return this.client
      .get<BaseResponseResources<T>>(buildURL(this.resourceName), {
      params: this.searchParamsObject
    })
      .then((response: any) => {
        return onfulfilled ? onfulfilled(response.data) : (response.data as TResult1)
      })
  }
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

type EventType = 'awf.workflow.event/workflow-init' | 'awf.workflow.event/task-completed';
type TaskStatus = 'requested' | 'in-progress';
type RequesterType = 'AidboxWorkflow';

interface Meta<T> {
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
  result: { resources: Array<Meta<TaskInput | DecisionInput>> };
}

interface Task {
  result: { resource: Meta<TaskInput> }
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
  params: Meta<TaskDefinitionsMap[K]['params']>,
) => Promise<TaskDefinitionsMap[K]['result']> | TaskDefinitionsMap[K]['result'];

type WorkflowHandler<K extends keyof WorkflowDefinitionsMap> = (
  params: Meta<DecisionInput>,
  actions: WorkflowActions<K>,
) => void;
