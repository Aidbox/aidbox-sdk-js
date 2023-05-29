# AIDBOX SUBSCRIPTIONS API SAMPLE

[Aidbox subscriptions module](https://docs.aidbox.app/api-1/reactive-api-and-subscriptions/subscriptions-1) is a way to subscribe and get notifications about updating resources on the server. It is a common denominator of FHIR R4/R5 subscriptions specification with some extensions.

This example shows the flow of working with aidbox subscriptions in the node js application.

![aidbox-subscription-to-queue](../../assets/subscription-queue.png)

## How to run the application
#### Step 1: Environment variables
Create a new file in the root directory with the name `.env` use `.env.tpl` as a reference.  
Fill in licence key `AIDBOX_LICENSE` you can obtain it [here](https://aidbox.app).

#### Step 2: Install dependencies
```    
npm install
```

#### Step 3: Run docker containers
```
docker compose up
```

#### Step : Run docker containers
```
npm run start
```


## Flow the application implements
#### Step 1: [Create a subscription listener](https://github.com/Aidbox/aidbox-sdk-js/blob/c1347852b0894944b542db3096309c7e92a0bf7e/subscription-sample/src/endpoints.ts#L135)
We want to create an endpoint in our backend service to handle our future Aidbox notifications about selected resource change.
Make sure that your http endpoint [responses](https://github.com/Aidbox/aidbox-sdk-js/blob/main/subscription-sample/src/endpoints.ts#L140) with `status: 200` on Aidbox subscription [handshake](https://docs.aidbox.app/api-1/reactive-api-and-subscriptions/subscriptions-1#protocol) request.

#### Step 2: [Register a subscription in Aidbox](https://github.com/Aidbox/aidbox-sdk-js/blob/main/subscription-sample/src/subscriptions.ts)
Then we have to tell Aidbox about our endpoint and register a subscription  to resource that we want to be notified about changes for.
We provide `id`, `status`, `trigger`, and the `channel` with the endpoint that we created on step 1.

```typescript
aidbox.subscriptionEntry({
    id: "observation-created",
    status: "active",
    trigger: { Observation: { event: ["create"] } },
    channel: { endpoint: `${process.env.NODE_APP_URL}/observation-created` },
})
```

#### Step 3: [Create queue](https://github.com/Aidbox/aidbox-sdk-js/blob/c1347852b0894944b542db3096309c7e92a0bf7e/subscription-sample/src/sqs.ts#L14) and [pushes](https://github.com/Aidbox/aidbox-sdk-js/blob/c1347852b0894944b542db3096309c7e92a0bf7e/subscription-sample/src/endpoints.ts#L9) to queue.

This part can be implemented in different ways and depends on your needs. But here we want to show the
most predictable and safe way to handle Aidbox events - instantly [redirect](https://github.com/Aidbox/aidbox-sdk-js/blob/c1347852b0894944b542db3096309c7e92a0bf7e/subscription-sample/src/endpoints.ts#L9) them to a queue. By this approach we avoid
any load from endpoint handler place and move it to async workers that can be safe scaled horizontally.

#### Step 4: [Implement simple worker](https://github.com/Aidbox/aidbox-sdk-js/blob/f1660e6fffc2e2e936769f2f44e2491244cc4aa5/subscription-sample/src/periodic-jobs.ts#L11) that will process notifications from the queue. 

There is the place where you want to keep your business logic. Just make any needed actions for each event in queue
asynchronously. In this sample we just [create](https://github.com/Aidbox/aidbox-sdk-js/blob/f1660e6fffc2e2e936769f2f44e2491244cc4aa5/subscription-sample/src/workers.ts#L27) "Task" resource for every notification. 
In a real project, this notification can be tied to various business logic.

## Performance

In this section we want to show the performance of Aidbox FHIR API with subscriptions and 
make sure that it's a good approach to use. Our goal is to see that subscriptions instantly reflects any changes
that happens with resources we interested in without any delays and problems.

Aidbox is able to integrate with [different services](https://docs.aidbox.app/core-modules/logging-and-audit/integrations/elastic-logs-and-monitoring-integration) for monitoring purpose. The current sample uses ElasticSearch for logs storing and Kibana for analyzing and visualizing data. 
Also, we have the ability to [send logs from node application](https://github.com/Aidbox/aidbox-sdk-js/blob/f1660e6fffc2e2e936769f2f44e2491244cc4aa5/subscription-sample/src/endpoints.ts#L20) through http directly to Aidbox using [sendLog](https://github.com/Aidbox/aidbox-sdk-js#sendlog).
This is a fine approach for applications with small infrastructure's size.

#### Test characteristics
We register subscriptions for the Patient, Observation, Encounter and DiagnosticReport FHIR resources and upload some [synthetic data](https://github.com/synthetichealth/synthea) to aidbox.

We've been uploading ~100 resources per second and all of them triggered subscriptions and aidbox has been sending notifications to our endpoints for all created resources instantly.

![creating resources on the aidbox side](../../assets/aidboxside_subscription.png)

We've been pushing all notifications to the queue from the Node application side.

![creating resources on the nodejs side](../../assets/nodeside_subscription.png)
