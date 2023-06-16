# AIDBOX WORKFLOW / TASK API SAMPLE

[The Aidbox workflow engine module](https://docs.aidbox.app/modules-1/workflow-engine) is the way to execute raliable, scalable and safe your complex bussines logic. The asynchronous nature of orchestration engine allows tasks to be processed independently, enabling parallelism that reduces processing time during load.

The example shows the flow of using Aidbox as a notification gateway service that [listens incomming appointments](https://docs.aidbox.app/modules-1/workflow-engine/services#subscription-trigger) and [spawns async tasks](https://docs.aidbox.app/modules-1/workflow-engine/task) for each of them. From other side we ( with SDK ) implements worker that is handling these tasks and send email to the patient.

## How to run the application

#### Step 1: Environment variables

Create a new file in the parent directory "examples" with the name `.env` use `.env.tpl` as a reference.  
Fill in licence key `AIDBOX_LICENSE` you can obtain it [here](https://aidbox.app),  
mailgun credentials `MAILGUN_DOMAIN` and `MAILGUN_API_KEY` you can find [here](https://docs.gravityforms.com/mailgun-api-key/).

#### Step 2: Install dependencies

```
cd .. && npm install
```

#### Step : Run worker

```
ts-node-esm index.ts
```