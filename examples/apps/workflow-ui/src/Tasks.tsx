import {
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Link,
  Row,
  Text,
} from "@nextui-org/react";
import { Client } from "aidbox-sdk";
import { useContext, useEffect, useState } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";

import { TickIcon } from "./TickIcon";
import { AppContext } from "./context";

const prettifyDate = (dateString: string) => {
  if (!dateString) {
    return "";
  }
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

interface TasksProps {
  appointmentId: string | null;
  config: {
    app_url: string;
    aidbox_url: string;
    aidbox_client: string;
    aidbox_secret: string;
  };
}

interface Task {
  id: string;
  params: {
    event?: string;
    until?: string;
  };
  status:
    | "created"
    | "ready"
    | "requested"
    | "in-progress"
    | "done"
    | "waiting";
  requester: {
    id: string;
    resourceType: "AidboxWorkflow";
  };
  definition:
    | "awf.workflow/decision-task"
    | "awf.task/wait"
    | "notification/send-email";
  "workflow-definition": "notification/appointment-created";
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

const green = "#17C964";
const gray = "#889096";

interface TaskData {
  title: "workflow-init" | "wait" | "send-email";
  color: typeof green | typeof gray;
  body: any;
  id?: string;
  params?: Task["params"];
}

interface LinksToCodeProps {
  text: string;
  link: string;
}

interface WaitBodyProps {
  skipButton: boolean;

  taskId?: string;
  waitDate?: string;
  aidboxClient: Client;
}

const linksToCodeData = {
  init: [
    { text: 'Workflow-init event', link: 'https://github.com/Aidbox/aidbox-sdk-js/blob/main/examples/apps/workflow/src/app.ts#L118' },
    { text: 'Retrieve the appointment', link: 'https://github.com/Aidbox/aidbox-sdk-js/blob/main/examples/apps/workflow/src/app.ts#L121' },
    { text: 'Find target date', link: 'https://github.com/Aidbox/aidbox-sdk-js/blob/main/examples/apps/workflow/src/app.ts#L122' },
    { text: 'Execute wait task', link: 'https://github.com/Aidbox/aidbox-sdk-js/blob/main/examples/apps/workflow/src/app.ts#L125' }
  ],
  wait: [
    { text: 'Retrieve Encouter', link: 'https://github.com/Aidbox/aidbox-sdk-js/blob/main/examples/apps/workflow/src/app.ts#L131' },
    { text: 'Execute send-email task', link: 'https://github.com/Aidbox/aidbox-sdk-js/blob/main/examples/apps/workflow/src/app.ts#L139' }
  ],
  send: [
    { text: 'Retrieve patient\'s telecom', link: 'https://github.com/Aidbox/aidbox-sdk-js/blob/main/examples/apps/workflow/src/app.ts#L83' },
    { text: 'Create Encounter and Communication', link: 'https://github.com/Aidbox/aidbox-sdk-js/blob/main/examples/apps/workflow/src/app.ts#L89' },
    { text: 'Generate depression form', link: 'https://github.com/Aidbox/aidbox-sdk-js/blob/main/examples/apps/workflow/src/app.ts#L106' },
    { text: 'Send email to the patient', link: 'https://github.com/Aidbox/aidbox-sdk-js/blob/main/examples/apps/workflow/src/app.ts#L111' }
  ]
}

const Completionist = () => <Text>Wait is completed</Text>;

const CountdownTimer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRenderProps) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <Text weight="semibold" color="error" css={{ mb: "10px", mt: "30px" }}>
        <Text b>Wait until send: </Text>
        {days}d {hours}h {minutes}m {seconds}s
      </Text>
    );
  }
};

const LinksToCode = ({ data }: { data: LinksToCodeProps[] }) => {
  return (
    <Grid.Container gap={0.5} css={{ h: "fit-content" }}>
      <Text weight="bold">Links to code:</Text>
      {data.map(({ text, link }, index) => {
<<<<<<< HEAD
        return (
          <Grid xs={12} alignItems="center" key={index}>
            <Badge variant="dot" color="primary" />
            <Text css={{ "max-width": "80%", pl: "10px" }}>
              <Link href={link} target="_blank">
                {text}
              </Link>
            </Text>
          </Grid>
        );
      })}
=======
      return (
        <Grid
          xs={12}
          alignItems='center'
          key={index}
        >
          <Badge
            variant='dot'
            color='primary'
          />
          <Text css={{ 'max-width': '80%', 'pl': '10px', 'm': 0 }}>
            <Link
              href={link}
              target='_blank'
            >{text}
            </Link>
          </Text>
        </Grid>
      )
            })}

>>>>>>> ada5765 (add workflow ui to mega ui, commit quiery sample, fix styles and links to code)
    </Grid.Container>
  );
};

const InitBody = () => {
  return (
    <Grid.Container gap={2} justify="center" css={{ py: 0 }}>
      <Grid xs={12} md={6} direction="column">
        <Text className="event-description">
          Aidbox &nbsp;
          <Link
            href="https://docs.aidbox.app/modules-1/workflow-engine/task/aidbox-predefined-tasks#awf.workflow-decision-task"
            target="_blank"
          >
            predefined decision task
          </Link>{" "}
          which is executed first in the context of the current workflow
          instance.
        </Text>
        <Text className="event-description">
          After receiving the workflow initiation event, we retrieve the
          appointment resource, calculate the date for sending the email, and
          execute the waiting task.
        </Text>
      </Grid>
      <Grid xs={6} md={6}>
        <LinksToCode data={linksToCodeData.init} />
      </Grid>
    </Grid.Container>
  );
};

const WaitBody = ({
  skipButton,
  taskId,
  waitDate,
  aidboxClient,
}: WaitBodyProps) => {
  const [skippedWait, setSkippedWait] = useState<boolean>(false);

  const skipWaitTask = async (taskId: string) => {
    await aidboxClient.task.cancel(taskId);
    setSkippedWait(true);
  };

  return (
    <Grid.Container gap={2} justify="center" css={{ py: 0 }}>
      <Grid xs={12} md={6} direction="column">
        <Text className="event-description">
          Task that will wait for the indicated duration or until the indicated
          datetime. Used in workflow when need to be paused for some purposes.
        </Text>
        <Text className="event-description">
          In our case, we wait till 2 days before the appointment.
        </Text>
        <Text weight="bold" className="event-description">
          You can press the skip wait button to run the workflow further.
        </Text>
      </Grid>
      <Grid xs={6} md={6} direction="column">
        <LinksToCode data={linksToCodeData.wait} />
<<<<<<< HEAD
        {waitDate && !skippedWait && (
          <Countdown date={Date.parse(waitDate)} renderer={CountdownTimer} />
        )}
        {waitDate && skippedWait && <Container css={{ height: "70px" }} />}
        {skipButton && !skippedWait && (
=======
        {waitDate && !skippedWait &&
          <Countdown
            date={Date.parse(waitDate)}
            renderer={CountdownTimer}
          />}
        {waitDate && skippedWait &&
          <Container css={{ height: '65px' }} />}
        {skipButton && !skippedWait &&
>>>>>>> ada5765 (add workflow ui to mega ui, commit quiery sample, fix styles and links to code)
          <Button
            onPress={() => {
              if (taskId) skipWaitTask(taskId);
            }}
            css={{ width: "50%" }}
          >
            Skip wait
          </Button>
        )}
        {skipButton && skippedWait && (
          <Button css={{ width: "50%" }} color="success">
            Wait task was skipped
          </Button>
        )}
      </Grid>
    </Grid.Container>
  );
};

const SendBody = () => {
  return (
    <Grid.Container gap={2} justify="center" css={{ py: 0 }}>
      <Grid xs={12} md={6} direction="column">
        <Text className="event-description">
          This task is configured by ourselves in&nbsp;
          <Link
            href="https://github.com/Aidbox/aidbox-sdk-js/blob/4c6d512588f57232a6d6faeabb0a682fede7bccf/examples/zen-project/zrc/notification.edn#L4"
            target="_blank"
          >
            the zen-project.
          </Link>
        </Text>
        <Text className="event-description">
          This task executes the business logic defined in the code.
          It&nbsp;involves retrieving the patient's email address, creating
          Encounter and Communication resources, generating the depression form,
          and sending the email.
        </Text>
      </Grid>
      <Grid xs={6} md={6}>
        <LinksToCode data={linksToCodeData.send} />
      </Grid>
    </Grid.Container>
  );
};

const taskList = [
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
] as Array<TaskData>;

const greenStatuses = ["in-progress", "done", "ready"];

const taskNameMap = {
  "awf.workflow/decision-task": "workflow-init",
  "awf.task/wait": "wait",
  "notification/send-email": "send-email",
};

export const Tasks = ({ appointmentId, config }: TasksProps) => {
  const { socketIo } = useContext(AppContext);
  const [tasksData, setTasks] = useState<TaskData[]>(taskList);
  const [workflowData, setWorkflow] = useState<Workflow | null>(null);
  const [emailSent, setEmailSent] = useState<boolean>(false);

  const aidboxClient = new Client(config.aidbox_url, {
    username: config.aidbox_client,
    password: config.aidbox_secret,
  });

  const getTasks = async (workflowId: string) => {
    const { data } = await aidboxClient.client.get<{
      entry: Array<{ resource: Task }>;
    }>(`AidboxTask?.requester.id=${workflowId}`);
    const updatedTasks = tasksData.map((item) => {
      const curTask = data.entry.find(
        ({ resource }) => taskNameMap[resource.definition] === item.title
      );
      if (curTask) {
        const curColor: TaskData["color"] = greenStatuses.includes(
          curTask.resource.status
        )
          ? green
          : gray;
        if (taskNameMap[curTask.resource.definition] === item.title) {
          return {
            ...item,
            color: curColor,
            id: curTask.resource?.id,
            params: curTask.resource?.params,
          };
        }
      }

      return item;
    });

    setTasks(updatedTasks);
  };

  useEffect(() => {
    if (appointmentId) {
      const fetchData = async () => {
        const { data } = await aidboxClient.client.get<{
          entry: Array<{ resource: Workflow }>;
        }>(`AidboxWorkflow?.params.id=${appointmentId}`);

        const workflow = data.entry[0]?.resource;
        setWorkflow(workflow);
        getTasks(workflow.id);
      };
      fetchData().catch(console.error);
    }
  }, [appointmentId]);

  useEffect(() => {
    socketIo.on("start_task", function (data) {
      setTimeout(() => getTasks(data), 1700);
    });

    socketIo.on("sent_email", function () {
      setTimeout(() => setEmailSent(true), 1700);
    });

    return () => {
      socketIo.off();
    };
  }, []);

  return (
    workflowData && (
      <Card css={{ mb: "20px" }}>
        <Card.Body css={{ width: "auto" }}>
          <Text h2 css={{ width: "auto", "text-align": "center" }}>
            Workflow Actions
          </Text>
          <Grid.Container
            gap={2}
            wrap="wrap"
            alignItems="center"
            direction="column"
          >
            {tasksData.map((item, index) => (
              <Grid key={index} css={{ width: "95%" }}>
                <Card
                  css={{
                    border: "solid",
                    borderColor: item.color,
                    borderWidth: "2px",
                  }}
                >
                  <Card.Header
                    css={{
                      justifyItems: "flex-start",
                      backgroundColor: item.color,
                      width: "auto",
                    }}
                  >
<<<<<<< HEAD
                    <Row wrap="wrap" justify="space-between" align="center">
                      <Text b css={{ pl: "10px" }}>
                        {item.title + " task"}
                      </Text>
                      {item.params?.until && (
                        <Text css={{ pr: "10px" }}>
                          {" "}
                          <Text b>Wait until: </Text>
                          {prettifyDate(item.params?.until)}
                        </Text>
                      )}
                    </Row>
                  </Card.Header>
                  <Card.Body css={{ py: "15px", width: "auto" }}>
                    {item.title === "workflow-init" && <InitBody />}
                    {item.title === "wait" && (
                      <WaitBody
                        skipButton={
                          item.title === "wait" && item.color === green
                        }
                        aidboxClient={aidboxClient}
                        taskId={item.id}
                        waitDate={item.params?.until}
                      />
                    )}
                    {item.title === "send-email" && <SendBody />}
                  </Card.Body>
                </Card>
              </Grid>
            ))}
            {emailSent && <TickIcon />}
          </Grid.Container>
        </Card.Body>
      </Card>
    )
  );
};
=======
                    <Text
                      b
                      css={{ pl: '10px' }}
                    >{item.title + ' task'}
                    </Text>
                    {item.params?.until &&
                      <Text css={{ pr: '10px', m: 0 }}> <Text b>Wait until: </Text>{prettifyDate(item.params?.until)}</Text>}
                  </Row>
                </Card.Header>
                <Card.Body css={{ py: '15px', width: 'auto' }}>
                  {item.title === 'workflow-init' && <InitBody />}
                  {item.title === 'wait' && <WaitBody
                    skipButton={item.title === 'wait' && item.color === green}
                    aidboxClient={aidboxClient}
                    taskId={item.id}
                    waitDate={item.params?.until}
                                            />}
                  {item.title === 'send-email' && <SendBody />}
                </Card.Body>
              </Card>
            </Grid>
    ))}
          {emailSent && <TickIcon />}
        </Grid.Container>
      </Card.Body>
                    </Card>
  )
}
>>>>>>> ada5765 (add workflow ui to mega ui, commit quiery sample, fix styles and links to code)
