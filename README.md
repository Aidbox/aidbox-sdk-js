## Aidbox authorization

Register your application with the auth provider in Aidbox to obtain a client ID and secret.

Please follow the aidbox documentation

### Basic

```javascript
import { Client } from 'aidbox-sdk-js'

const aidbox = new Client({
  url: 'www.aidbox-url.com',
  auth: { type: 'basic', username: 'name', password: 'password' }
});
```

### Client Credentials
```javascript
import { Client } from 'aidbox-sdk-js'

const aidbox = new Client({
  url: 'www.aidbox-url.com',
  auth: { type: 'client-credentials', clientId: 'client', secret: 'secret' }
});
```

### Resource Owner
```javascript
import { Client } from 'aidbox-sdk-js'

const aidbox = new Client({
  url: 'www.aidbox-url.com',
  auth: { type: 'resource-owner', clientId: 'client' }
});

const signIn = (username: string, password: string) => {
  return aidbox.recourseOwnerAuth(username, password)
}
```

## REST & FHIR API

#### Get resource
```typescript
(ResourceType, SearchParams) => Array<Resource>

const patient = await aidbox.api.getResource('Patient', searchParams);
```

#### Patch resource
```typescript
(ResourceType, SearchParams, Resource ) => Resource

const updatedPatient = await aidbox.api.patchResource('Patient', searchParams, { ...resource });
```

#### Delete resource
```typescript
(ResourceType, SearchParams) => Resource

const deletedPatient = await aidbox.api.deleteResource('Patient', searchParams);
```

#### SearchParams
```typescript
type SearchParams = {
    id?: string
    [Resource.fieldName]: string | Record<{
        [searchParameterName | or | and | gt | lte | exact | ... ]: string | string[]
    }>
}

const patient = await aidbox.api.getResource('Patient', { id: 'patient-id', name: { $or: ['Vlad','Rost'] } })
```

Search params as a query-builder (second variant, reference):

```typescript
const patient = await aidbox.api.getResource('Patient', 'patient-id')
  .and('name', 'Vlad', 'Anton')
  .exact('birthDate', '2020-01-01');
```

#### History read
```typescript
(ResourceType, string) => Array<ResourceVersiose>

const allPatientVersions = await aidbox.api.getResourceHistory('Patient', 'patient-id');
```

#### Version read
```typescript
(resourceType, id: string, version: number) => Resource

const oldPatient = await aidbox.api.getResourceVersion('Patient', 'patient-id', 0);
```

#### Validate
```typescript
type ValidationModes = { mode: 'create' | 'update' | 'delete' | 'patch' | 'merge-patch' | 'json-patch' }
(ResourceType, Resource, ValidationModes) => VlidationResult

const result1 = await aidbox.api.validateResource('Patient', resource);
const result2 = await aidbox.api.validateResource('Patient', resource, { mode: 'create' })
const result3 = await aidbox.api.validateResource('Patient', resource, { mode: 'delete' })
```

#### Match
```typescript
(ResourceType, Resource, threshold: 0-1) => Resource[]

const similarResources = await aidbox.api.matchResource('Patient', resource, 0)
```

#### Everything

```typescript
(patientId: string) => Resource

const resources = await aidbox.api.everything('patient-id')
```

#### Changes API

```typescript
type Params = {
  id?: string;
  version?: number | { 'lower-version': number, 'upper-version': number };
  fhir?: boolean;
  'omit-resources'?: boolean;
  _count?: number;
  _page?: number;
  _total?: 'none' | 'estimate' | 'accurate';
}

const changes = await aidbox.changes(params)
```

#### Batch Upsert
```typescript
(resources: Array<Resource>) => Array<Resource>;

const resources = await aidbox.batch.upsert(resources)
```

#### Batch/Transaction

Batch set
```typescript
type Body = Array<{
  resource: Array<Resource>
  request: { method: HTTPMethods, url: string }
}>

(body: Body) => Resources

const resources = await aidbox.batch.set(body)
```

Batch update
```typescript
type Body = Array<{
  resource: Array<Resource>
  request: { method: HTTPMethods, url: string }
}>

(body: Body) => Resources

let resources = await aidbox.batch.update(body)
```

Get History
```typescript
(ResourceName, string) => HistoryOfResource

let history = await aidboxClient.batch.history('Patient', 'patient-id')
```
