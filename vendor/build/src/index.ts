import axios, { AxiosBasicCredentials, AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import {
  TaskDefinitionsMap,
  TaskDefinitionsNameMap,
  WorkflowDefinitionsMap,
  WorkflowDefinitionsNameMap,
  ResourceTypeMap,
  SearchParams,
  SubsSubscription,
} from './aidbox-types';

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

export type APITypes = 'aidbox' | 'fhir';

function buildURL(type: APITypes, url: string) {
  return type === 'fhir' ? 'fhir/' + url : url;
}

export class Client {
  client: AxiosInstance;
  apiType: APITypes;

  constructor(baseURL: string, credentials: AxiosBasicCredentials, apiType: APITypes = 'aidbox') {
    this.client = axios.create({ baseURL, auth: credentials });
    this.apiType = apiType;
  }
  getResources<T extends keyof ResourceTypeMap>(resourceName: T) {
    return new GetResources(this.client, resourceName);
  }

  async getResource<T extends keyof ResourceTypeMap>(resourceName: T, id: string): Promise<BaseResponseResource<T>> {
    const response = await this.client.get<BaseResponseResource<T>>(buildURL(this.apiType, resourceName + '/' + id));
    return response.data;
  }

  async deleteResource<T extends keyof ResourceTypeMap>(resourceName: T, id: string): Promise<BaseResponseResource<T>> {
    const response = await this.client.delete<BaseResponseResource<T>>(buildURL(this.apiType, resourceName + '/' + id));
    return response.data;
  }

  async createQuery(name: string, body: CreateQueryBody) {
    const response = await this.client.put(`/AidboxQuery/${name}`, body);
    return response.data;
  }

  async executeQuery<T>(
    name: string,
    params?: Record<string, unknown>,
  ): Promise<AxiosResponse<ExecuteQueryResponseWrapper<T>>> {
    try {
      const queryParams = new URLSearchParams();
      if (params) {
        Object.keys(params).map((key) => {
          const value = params[key];
          if (value) {
            queryParams.set(key, value.toString());
          }
        });
      }
      return this.client.get<ExecuteQueryResponseWrapper<T>>(`$query/${name}`, {
        params: queryParams,
      });
    } catch (e) {
      throw e;
    }
  }

  async patchResource<T extends keyof ResourceTypeMap>(
    resourceName: T,
    id: string,
    body: PathResourceBody<T>,
  ): Promise<BaseResponseResource<T>> {
    const response = await this.client.patch<BaseResponseResource<T>>(buildURL(this.apiType, resourceName + '/' + id), {
      ...body,
    });
    return response.data;
  }

  async createResource<T extends keyof ResourceTypeMap>(
    resourceName: T,
    // @ts-ignore
    body: SetOptional<ResourceTypeMap[T], 'resourceType'>,
  ): Promise<BaseResponseResource<T>> {
    const response = await this.client.post<BaseResponseResource<T>>(buildURL(this.apiType, resourceName), { ...body });
    return response.data;
  }

  async rawSQL(sql: string, params?: unknown[]) {
    const body = [sql, ...(params?.map((value) => value?.toString()) ?? [])];

    const response = await this.client.post('/$sql', body);
    return response.data;
  }

  async createSubscription({ id, status, trigger, channel }: SubscriptionParams): Promise<SubsSubscription> {
    const response = await this.client.put<SubsSubscription>(`SubsSubscription/${id}`, {
      status,
      trigger,
      channel: { ...channel, type: 'rest-hook' },
    });
    return response.data;
  }

  subscriptionEntry({
    id,
    status,
    trigger,
    channel,
  }: SubscriptionParams): SubsSubscription & { id: string; resourceType: 'SubsSubscription' } {
    return {
      resourceType: 'SubsSubscription',
      id,
      status,
      trigger,
      channel: { ...channel, type: 'rest-hook' },
    };
  }

  async sendLog(data: LogData): Promise<void> {
    await this.client.post('/$loggy', data);
  }

  transformToBundle<RT extends keyof ResourceTypeMap, R extends ResourceTypeMap[RT]>(
    resources: (R & { resourceType: RT; id: string })[],
    method: 'PUT' | 'PATCH',
  ): BundleRequestEntry<R>[];
  transformToBundle<RT extends keyof ResourceTypeMap, R extends ResourceTypeMap[RT]>(
    resources: (R & { resourceType: RT; id?: string })[],
    method: 'POST',
  ): BundleRequestEntry<R>[];
  transformToBundle<RT extends keyof ResourceTypeMap, R extends ResourceTypeMap[RT]>(
    resources: (R & { resourceType: RT; id?: string })[],
    method: 'POST' | 'PUT' | 'PATCH',
  ): BundleRequestEntry<R>[] {
    return resources.map((resource) => ({
      request: {
        method: method,
        url: method === 'POST' ? `/${resource.resourceType}` : `/${resource.resourceType}/${resource.id}`,
      },
      resource,
    }));
  }

  async bundleRequest(
    entry: Array<BundleRequestEntry>,
    type: 'transaction' | 'batch' = 'transaction',
  ): Promise<BundleRequestResponse> {
    const response = await this.client.post(`/`, {
      resourceType: 'Bundle',
      type,
      entry,
    });
    return response.data;
  }
}

export class GetResources<T extends keyof ResourceTypeMap, R extends ResourceTypeMap[T]>
  implements PromiseLike<BaseResponseResources<T>>
{
  private searchParamsObject: URLSearchParams;
  resourceName: T;
  client: AxiosInstance;

  constructor(client: AxiosInstance, resourceName: T) {
    this.client = client;
    this.searchParamsObject = new URLSearchParams();
    this.resourceName = resourceName;
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
    prefix?: Prefix | never,
  ): this {
    if (!Array.isArray(value)) {
      const queryValue = `${prefix ?? ''}${value}`;

      this.searchParamsObject.append(key.toString(), queryValue);
      return this;
    }

    if (prefix) {
      if (prefix === 'eq') {
        this.searchParamsObject.append(key.toString(), value.join(','));
        return this;
      }

      value.map((item) => {
        this.searchParamsObject.append(key.toString(), `${prefix}${item}`);
      });

      return this;
    }

    const queryValues = value.join(',');
    this.searchParamsObject.append(key.toString(), queryValues);

    return this;
  }

  contained(contained: boolean | 'both', containedType?: 'container' | 'contained') {
    this.searchParamsObject.set('_contained', contained.toString());

    if (containedType) {
      this.searchParamsObject.set('_containedType', containedType);
    }

    return this;
  }

  count(value: number) {
    this.searchParamsObject.set('_count', value.toString());

    return this;
  }

  elements(args: ElementsParams<T, R>) {
    const queryValue = args.join(',');

    this.searchParamsObject.set('_elements', queryValue);

    return this;
  }

  summary(type: boolean | 'text' | 'data' | 'count') {
    this.searchParamsObject.set('_summary', type.toString());

    return this;
  }

  sort(key: SortKey<T>, dir: Dir) {
    const existedSortParams = this.searchParamsObject.get('_sort');

    if (existedSortParams) {
      const newSortParams = `${existedSortParams},${dir === 'asc' ? '-' : ''}${key.toString()}`;

      this.searchParamsObject.set('_sort', newSortParams);
      return this;
    }

    this.searchParamsObject.set('_sort', dir === 'asc' ? `-${key.toString()}` : key.toString());

    return this;
  }

  then<TResult1 = BaseResponseResources<T>, TResult2 = never>(
    onfulfilled?: ((value: BaseResponseResources<T>) => PromiseLike<TResult1> | TResult1) | undefined | null,
    onrejected?: ((reason: any) => PromiseLike<TResult2> | TResult2) | undefined | null,
  ): PromiseLike<TResult1 | TResult2> {
    return this.client
      .get<BaseResponseResources<T>>(this.resourceName, {
        params: this.searchParamsObject,
      })
      .then((response: any) => {
        return onfulfilled ? onfulfilled(response.data) : (response.data as TResult1);
      });
  }
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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
    'task-request': { definition: (typeof TaskDefinitionsNameMap)[T]; params: TaskDefinitionsMap[T]['params'] };
  };
  fail: (params: any) => { action: 'awf.workflow.action/fail'; error: any };
}

type TaskHandler<K extends keyof TaskDefinitionsMap> = (
  params: Meta<TaskDefinitionsMap[K]['params']>,
) => Promise<TaskDefinitionsMap[K]['result']> | TaskDefinitionsMap[K]['result'];

type WorkflowHandler<K extends keyof WorkflowDefinitionsMap> = (
  params: Meta<DecisionInput>,
  actions: WorkflowActions<K>,
) => void;

export class Engine {
  private readonly client;
  private readonly workers: Array<{}>;

  constructor({ url, username, password }: { url: string; username: string; password: string }) {
    this.client = axios.create({ baseURL: url, auth: { username, password } });
    this.workers = [];
  }

  task = {
    execute: this.executeTask.bind(this),
    implement: <K extends keyof TaskDefinitionsMap>(
      name: K,
      handler: TaskHandler<K>,
      options: WorkerOptions = {},
    ): void => {
      const worker = this.runDaemon(
        () => this.poll({ taskDefinitions: [TaskDefinitionsNameMap[name]] }, options),
        this.createHandler<TaskInput>(handler),
        options,
      );
      this.workers.push(worker);
    },
  };

  workflow = {
    execute: this.executeWorkflow.bind(this),
    implement: <W extends keyof WorkflowDefinitionsMap>(
      name: W,
      handler: WorkflowHandler<W>,
      options: WorkerOptions = {},
    ): void => {
      const worker = this.runDaemon(
        () => this.poll({ workflowDefinitions: [WorkflowDefinitionsNameMap[name]] }, options),
        this.createHandler<DecisionInput>(this.wrapHandler<W>(handler)),
        options,
      );
      this.workers.push(worker);
    },
  };

  async runDaemon(
    poll: () => Promise<Array<Meta<TaskInput | DecisionInput>>>,
    handler: (input: any) => any,
    options: WorkerOptions,
  ) {
    while (true) {
      const tasks = await poll();
      await Promise.allSettled(tasks.map(async (task) => handler(task)));
      await sleep(options.pollInterval || 1000);
    }
  }

  wrapHandler<W extends keyof WorkflowDefinitionsMap>(handler: WorkflowHandler<W>) {
    return (params: Meta<DecisionInput>) =>
      handler(params, {
        complete: (result: WorkflowDefinitionsMap[W]['result']) => ({
          action: 'awf.workflow.action/complete-workflow',
          result,
        }),
        execute: <T extends keyof TaskDefinitionsMap>(params: {
          definition: T;
          params: TaskDefinitionsMap[T]['params'];
        }) => ({
          action: 'awf.workflow.action/schedule-task',
          'task-request': { definition: TaskDefinitionsNameMap[params.definition], params: params.params },
        }),
        fail: (error: any) => ({ action: 'awf.workflow.action/fail', error }),
      });
  }

  createHandler<T extends TaskInput | DecisionInput>(handler: (task: Meta<T>) => void) {
    return async (task: Meta<T>) => {
      await this.startTask(task.id, task.execId);

      try {
        const result = await handler(task);
        await this.completeTask(task.id, task.execId, result);
      } catch (error) {
        console.error((error as AxiosError)?.response?.data);
        await this.failTask(task.id, task.execId, error);
      }
    };
  }

  async poll(params: { workflowDefinitions?: [string]; taskDefinitions?: [string] }, options: WorkerOptions) {
    const { data: tasksBatch } = await this.client.post<TasksBatch>('/rpc', {
      method: 'awf.task/poll',
      params: { ...params, maxBatchSize: options.batchSize },
    });

    return tasksBatch.result.resources;
  }

  startTask(id: string, executionId: string) {
    try {
      return this.client.post<TasksBatch>('/rpc', {
        method: 'awf.task/start',
        params: { id: id, execId: executionId },
      });
    } catch (error) {
      console.error((error as AxiosError)?.response?.data);
    }
  }

  completeTask(id: string, executionId: string, payload: unknown) {
    return this.client.post<TasksBatch>('/rpc', {
      method: 'awf.task/success',
      params: { id: id, execId: executionId, result: payload },
    });
  }

  failTask(id: string, executionId: string, payload: unknown) {
    try {
      return this.client.post<TasksBatch>('/rpc', {
        method: 'awf.task/fail',
        params: { id: id, execId: executionId, result: payload },
      });
    } catch (error) {
      console.error((error as AxiosError)?.response?.data);
    }
  }

  executeWorkflow<K extends keyof WorkflowDefinitionsMap>(
    name: K,
    params: WorkflowDefinitionsMap[K]['params'],
  ): Promise<AxiosResponse<TasksBatch>> {
    try {
      return this.client.post<TasksBatch>('/rpc', {
        method: 'awf.workflow/create-and-execute',
        params: { definition: WorkflowDefinitionsNameMap[name], params },
      });
    } catch (error) {
      throw (error as AxiosError)?.response;
    }
  }

  executeTask<K extends keyof TaskDefinitionsMap>(
    definition: K,
    params: TaskDefinitionsMap[K]['params'],
  ): Promise<AxiosResponse<TasksBatch>> {
    try {
      return this.client.post<TasksBatch>('/rpc', {
        method: 'awf.task/create-and-execute',
        params: { definition: TaskDefinitionsNameMap[definition], params },
      });
    } catch (error) {
      throw (error as AxiosError)?.response;
    }
  }
}
