# Aidbox JavaScript SDK FHIR-R4

## How to use

**Important:** Before we start we have to make sure that
aidbox [client](https://docs.aidbox.app/tutorials/security-and-access-control/basic-auth-tutorial#basic-auth) is
configured
and your [access policies](https://docs.aidbox.app/security-and-access-control-1/security/access-control) provide
granular access to resources you're trying to reach.

```javascript
import { Client } from 'aidbox-sdk';

export const aidbox = new Client('<HOST_URL>', {
  auth: {
    method: 'basic',
    credentials: {
      username: '<CLIENT_NAME>',
      password: '<CLIENT_SECRET>',
    },
  },
});
```

This code creates a new instance of the SDK from the aidbox-sdk package, and sets it up to connect to an Aidbox server
running on `<HOST_URL>`.
You would need to replace `<CLIENT_NAME>` and `<CLIENT_SECRET>` with the actual client ID and client secret that you
configured earlier, also SDK support two types of API (Aidbox,
FHIR [see difference](https://docs.aidbox.app/modules-1/fhir-resources/aidbox-and-fhir-formats)) just provide one of
them as third parameter.

By using aidbox-sdk in your project, you can easily interact with an Aidbox server and perform actions like reading and
writing resources, searching for resources, and more.

Then you can use aidboxClient in wherever you want

```javascript
import { aidbox } from '../aidbox-client';

async function getPatients() {
  return aidbox.resource.list('Patient');
}
```

## API

### resource.list

list method accepts the name of the resource and is the basis for the subsequent complication of the request

#### where

Method where add additional parameters for searching

For example, you want to find all patients with name John, so

```typescript
resource.list('Patient').where('name', 'John');
```

Or, you want to find all patients with name John or Steve

```typescript
resource.list('Patient').where('name', ['John', 'Steve']);
```

Also, method where support prefixes for numbers and date, just pass it as third parameter

```typescript
resource.list('Patient').where('birthDate', '2014-06-30', 'gt');
```

#### Sort

Method sort add additional parameters for sorting

For example, you want to display the oldest patients

```typescript
resource.list('Patient').sort('birthDate', 'acs');
```

And also, you want to sort this data by patients name

```typescript
resource.list('Patient').sort('birthDate', 'acs').sort('name', 'acs');
```

#### Count

Method count used for make limit the number of resource returned by request

```typescript
resource.list('Patient').count(10);
```

#### Summary

To request only a portion of the resources from a server, you can use the summary function. This function allows you to
specify the type of summary you want to receive, such as **true, false, text, data, or count**.

By default, when you make a request to a server, it will return all resource.

The summary function accepts several types of summaries, each of which provides a different level of detail about the
data. For example:

- true - limited subset of elements from the resource
- false - all parts of the resource
- text - only the text, id, meta, and top-level mandatory elements
- data - resources without the text element
- count - count of the matching resources, without returning the actual matches

  summary("data")

#### Elements

If you need to retrieve specific elements of a resource from a server, you can use the elements function. This function
allows you to specify which parts of the resource you are interested in, and can help to reduce the amount of data
returned by the server.

By using the elements function, you can customize your requests to retrieve only the data that you need, rather than
requesting the entire dataset. This can be particularly useful when dealing with large datasets or when you only need a
small subset of the available data.

To use the elements function, simply pass in the elements you want to retrieve as arguments. For example, if you only
need the name and address fields from a resource, you can make a request using the following syntax:

```typescript
resource.list('Patient').elements(['name', 'address']);
```

This request will return only the name and address fields for each resource, rather than the entire dataset. By reducing
the amount of data returned, you can help to streamline your requests and improve the performance of your application.

### resource.get

The get function is a tool for retrieving a single resource by its ID.

To use the getResource function, you must pass in the resource type and ID as arguments. For example, if you want to
retrieve a patient resource with the ID some-id, you can make a request using the following syntax:

```typescript
resource.get('Patient', 'id');
```

### resource.create

The createResource function is used to create a new resource.

The first argument is a resource name, the second one is body of resource

```typescript
resource.create('Patient', { active: true });
```

### resource.update()

The update function is used to update a specific resource identified by its id with a partial set of data
provided in the third parameter. This function allows for partial updates of a resource without having to send the
entire resource object.

The first parameter specifies the name of the resource to be updated. The second parameter identifies the specific
resource to be updated.

```typescript
resource.update('Patient', 'c58f29eb-f28d-67c1-0400-9af3aba3d58c', {
  active: false,
});
```

### ### resource.delete()

The deleteResource function is used to delete a specific resource identified by its id.

```typescript
resource.delete('Patient', 'c58f29eb-f28d-67c1-0400-9af3aba3d58c');
```

### createSubscription

Aidbox subscription is a way to subscribe and get notifications about updating resources on the server. See
our [subscription sample](https://github.com/Aidbox/aidbox-sdk-js/tree/main/subscription-sample) for more details.

```javascript
await client.subsSubscription.create({
  id: 'patient-created',
  status: 'active',
  trigger: { Patient: { event: ['create'] } },
  channel: { endpoint: 'https://aidbox/patient-created' },
});
```

### sendLog

Aidbox has the ability to extend its logs. There is
an [endpoint](https://docs.aidbox.app/core-modules/logging-and-audit/extending-access-logs#usdloggy-endpoint) that
accepts logs with the defined structure from your application. These logs are ingested into the elastic log.

```javascript
await client.sendLog({
    type: "ui",
    message: {event: "YOUR_EVENT", id: "id", ...},
    v: "APP_VERSION",
    fx: "fetchUsers"
})
```

### Bundle request

SDK has helpers to prepare data for bundle request.

```javascript
client.transformToBundle(
  [
    {
      resourceType: 'Patient',
      name: [
        {
          given: [''],
          family: '',
        },
      ],
    },
  ],
  'POST',
);
```

Bundle requests could be a [transaction or batch](https://docs.aidbox.app/api-1/fhir-api/bundle#post-endpoint) type. SDK
uses the "transaction" type by default but you can change it by providing it in the second parameter.

```javascript
const data = ArrayOfPatients.map(client.bundleEntryPost);

await client.bundleRequest(data, 'batch');
```

## Task API

Queues are a valuable tool for achieving reliable, asynchronous, scalable, and retry-safe code execution.
By using queues, we can ensure that tasks or messages are processed reliably, even in the face of failures or system
disruptions.
The asynchronous nature of queues allows tasks to be processed independently, enabling parallelism and reducing wait
times.

```javascript
import { Engine } from 'aidbox-javascript-sdk';

const client = new Engine('http://localhost:8888', {
  username: 'test',
  password: 'secret',
});
```

### Definition

First of all we have to create task's schema with settings that apply restrictions on
input and output arguments for entity like this one:

```clojure
 SendMessage
{:zen/tags #{awf.task/definition zen/schema}
 :type     zen/map
 :keys     {:params {:type    zen/map
                     :require #{:phone :message}
                     :keys    {:phone   {:type zen/string}
                               :message {:type zen/string}}}
            :result {:type    zen/map
                     :require #{:status}
                     :keys    {:status {:type zen/string}}}}}
```

[More information about task definition](https://docs.aidbox.app/modules-1/workflow-engine/task#1.-specify-task-definition)  
Notice: we have to regenerate SDK package each time we made changes into configuration project

### Implementation

Next step is creating business logic that will be considered as a worker,
the worker will be handling each task, we can

```javascript
client.task.implement(
  'SendMessage',
  async ({ params, status }) => {
    const { message, phone } = params;

    try {
      await fetch('https://message-sending-server.com/', {
        method: 'POST',
        body: JSON.stringify({ message, phone }),
      });

      return { status: 'success' };
    } catch (error) {
      return { status: 'failure' };
    }
  },
  { batchSize: 5 },
);
```

### Execution

The way to execute a single task with unique context

```javascript
await client.task.execute('SendMessage', {
  phone: '+1234567890',
  message: 'Hi!',
});
```

## Workflow Engine

Aidbox provides Workflow Engine module, so you're able to define your own sequence
of async tasks on top of Task API. In many business processes, certain tasks depend on the completion of other tasks.
Defining task dependencies through workflow implementation allows the developer
to control the order in which tasks are executed.

```javascript
import { Engine } from 'aidbox-javascript-sdk';

const client = new Engine('http://localhost:8888', {
  username: 'test',
  password: 'secret',
});
```

### Workflow Definition

```clojure
 CheckOutWorkflow
{:zen/tags #{awf.workflow/definition zen/schema}
 :type     zen/map
 :pool     decision-pool
 :keys     {:params {:type    zen/map
                     :require #{:clientId}
                     :keys    {:clientId {:type zen/string}}}
            :result {:type zen/map
                     :keys {:messageId {:type zen/string}}}
            :error  {:type zen/map
                     :keys {:message {:type zen/string}}}}}
```

[More information about workflow definition](https://docs.aidbox.app/modules-1/workflow-engine/workflow#1.-specify-workflow-definition)  
Notice: we have to regenerate SDK package each time we made changes into configuration project

### Workflow Implementation

```javascript
await client.workflow.implement(
  'CheckOutWorkflow',
  async ({ params }, { execute, complete, fail }) => {
    if (params.event === 'awf.workflow.event/workflow-init') {
      const response = await fetch('https://server.com/get-client');
      const { phone } = response.json();
      return [
        execute({
          definition: 'SendMessage',
          params: { phone, message: 'Hi!' },
        }),
      ];
    }

    try {
      const response = await fetch('https://workflow-state.com');
      const data = response.json();

      if (
        params.event === 'awf.workflow.event/task-completed' &&
        data.step === 1
      ) {
        return [execute({ definition: 'UpdateInformation', params: {} })];
      }

      if (
        params.event === 'awf.workflow.event/task-completed' &&
        data.step === 2
      ) {
        return [complete({})];
      }
    } catch (error) {
      return [fail({ error })];
    }

    return [];
  },
);
```

### Workflow Execution

```javascript
await client.workflow.execute('CheckOutWorkflow', { clientId: '' });
```
