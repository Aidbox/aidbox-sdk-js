export interface SearchParams {
    'placeholder-1': { }
    'placeholder-2': { }
}

export interface SubsSubscription {
    status: 'active' | 'off';
    trigger: { event: Array<'all' | 'create' | 'update' | 'delete'>; filter?: unknown };
    channel: { type: 'rest-hook'; };
}

export interface ResourceTypeMap {
    'placeholder-1': { }
    'placeholder-2': { }
}

export type TaskDefinitionsMap = {
    'placeholder-1': { params: {}, result: {} }
    'placeholder-2': { params: {}, result: {} }
}

export type WorkflowDefinitionsMap = {
    'placeholder-1': { params: {}, result: {} }
    'placeholder-2': { params: {}, result: {} }
}
