import { createEffect, createEvent, createStore, sample } from "effector";
import { aidboxClient } from "./client";
import { Appointment } from "aidbox-sdk/types";

export const green = "#17C964";
export const gray = "#889096";
export interface Task {
  id: string;
  params: {
    event?: string;
    until?: string;
  };
  status: "created" | "ready" | "requested" | "in-progress" | "done" | "waiting";
  requester: {
    id: string;
    resourceType: "AidboxWorkflow";
  };
  definition: "awf.workflow/decision-task" | "awf.task/wait" | "notification/send-email";
  "workflow-definition": "notification/appointment-created";
}

export interface TaskData {
  title: "workflow-init" | "wait" | "send-email";
  color: typeof green | typeof gray;
  body: any;
  id?: string;
  params?: Task["params"];
  status?: Task["status"];
}

interface Workflow {
  params: {
    id: string;
  };
  status: "created" | "in-progress" | "done";
  definition: "notification/appointment-created";
  id: string;
  resourceType: "AidboxWorkflow";
  meta: {
    lastUpdated: string;
    createdAt: string;
    versionId: string;
  };
}

// #region Appointment

export const appointmentData = {
  resourceType: "Appointment",
  status: "booked",
  description: "Discussion on the results of your recent MRI",
  start: "2030-12-10T09:00:00Z",
  end: "2030-12-10T11:00:00Z",
  created: "2023-10-10",
  participant: [
    {
      actor: {
        reference: "Patient/03cb8799-bfbd-40fa-9ea8-96114cf1fec1",
        display: "Peter James Chalmers",
      },
      status: "accepted",
    },
  ],
};

const patientData = {
  name: [
    {
      given: ["Peter", "James"],
      family: "Chalmers",
    },
  ],
  telecom: [
    {
      value: "",
      system: "email",
    },
  ],
  resourceType: "Patient",
};

export const $appointment = createStore<Appointment | null>(null);

export const createAppointment = createEvent<string>();
const createAppointmentFx = createEffect<string, Appointment>(async (email: string) => {
  const patient = {
    ...patientData,
    telecom: [
      {
        value: email,
        system: "email",
      },
    ],
  };

  const patientResponse = await aidboxClient.createResource(`Patient`, patient);

  const data = await aidboxClient.createResource("Appointment", {
    ...appointmentData,
    participant: [
      {
        actor: {
          reference: `Patient/${patientResponse.id!}`,
          display: "Peter James Chalmers",
        },
        status: "accepted",
      },
    ],
  });
  return data;
});

const getWorkflowFx = createEffect<string, Workflow | null>(async (appointmentId) => {
  const { data } = await aidboxClient.client.get<{
    entry: Array<{ resource: Workflow }>;
  }>(`AidboxWorkflow?.params.id=${appointmentId}`);

  const workflow = data.entry[0]?.resource;
  return workflow || null;
});

sample({ clock: createAppointment, target: createAppointmentFx });
sample({ clock: createAppointmentFx.doneData, target: $appointment });

sample({
  clock: createAppointmentFx.doneData,
  filter: (appointment) => Boolean(appointment.id),
  fn: (appointment) => appointment.id!,
  target: getWorkflowFx,
});

const waitFx = createEffect<string, string>(
  (appointmentId: string) => new Promise((rs) => setTimeout(() => rs(appointmentId), 1000))
);
export const $workflow = createStore<Workflow | null>(null);

sample({
  clock: getWorkflowFx.done,
  filter: ({ result }) => !!result,
  fn: ({ result }) => result,
  target: $workflow,
});

sample({
  clock: getWorkflowFx.done,
  filter: ({ result }) => !result,
  fn: ({ params }) => params,
  target: waitFx,
});

sample({
  clock: waitFx.doneData,
  target: getWorkflowFx,
});

// #endregion Appointment

// #region Tasks

const taskNameMap = {
  "awf.workflow/decision-task": "workflow-init",
  "awf.task/wait": "wait",
  "notification/send-email": "send-email",
};
export const $tasks = createStore<TaskData[]>([
  {
    title: "workflow-init",
    color: gray,
  },
  {
    title: "wait",
    body: "",
    color: gray,
  },
  {
    title: "send-email",
    body: "",
    color: gray,
  },
] as TaskData[]);
const greenStatuses = ["in-progress", "done", "ready"];
// gena.razmakhnin@gmail.com

export const $emailSent = $tasks.map(
  (tasks) => tasks.filter((item) => item?.status === "done").length === 3
);

const getTasksFx = createEffect<{ tasksData: TaskData[]; workflowId: string }, TaskData[]>(
  async ({ workflowId, tasksData }) => {
    const { data } = await aidboxClient.client.get<{
      entry: Array<{ resource: Task }>;
    }>(`AidboxTask?.requester.id=${workflowId}`);
    const updatedTasks = tasksData.map((item) => {
      const curTask = data.entry.find(
        ({ resource }) => taskNameMap[resource.definition] === item.title
      );
      if (curTask) {
        const curColor: TaskData["color"] = greenStatuses.includes(curTask.resource.status)
          ? green
          : gray;
        if (taskNameMap[curTask.resource.definition] === item.title) {
          return {
            ...item,
            color: curColor,
            id: curTask.resource?.id,
            params: curTask.resource?.params,
            status: curTask.resource?.status,
          };
        }
      }

      return item;
    });

    return updatedTasks;
  }
);

export const $skipWait = createStore(false);
export const skipWait = createEvent<string>();
export const skipWaitFx = createEffect((taskId: string) => aidboxClient.task.cancel(taskId));
sample({ clock: skipWait, target: skipWaitFx });

sample({ clock: skipWaitFx.doneData, fn: () => true, target: $skipWait });
export const getTasks = createEvent<string>();

sample({
  clock: getTasks,
  source: $tasks,
  fn: (tasks, wf) => ({
    tasksData: tasks,
    workflowId: wf,
  }),
  target: getTasksFx,
});

sample({ clock: getTasksFx.doneData, target: $tasks });
sample({
  clock: getWorkflowFx.done,
  filter: ({ result }) => !!result,
  fn: ({ result }) => result?.id!,
  target: getTasks,
});

const getTasksIntervalFx = createEffect<string, void>(async (workflowId) => {
  new Promise((rs) => setTimeout(() => rs(workflowId), 1500));
});

sample({
  clock: getWorkflowFx.done,
  filter: ({ result }) => !!result,
  fn: ({ result }) => result?.id!,
  target: getTasksIntervalFx,
});

sample({
  clock: getTasksIntervalFx.done,
  source: $emailSent,
  filter: (sent) => !sent,
  fn: (_, { params }) => params,
  target: getTasks,
});

sample({
  clock: getTasksFx.done,
  source: $emailSent,
  filter: (sent) => !sent,
  fn: (_, { params }) => params.workflowId,
  target: getTasksIntervalFx,
});

// #endregion Tasks
