import {
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Loading,
  Text,
  Link,
} from "@nextui-org/react";
<<<<<<< Updated upstream
import { Client } from "aidbox-sdk";
import { Appointment } from "aidbox-sdk/types";
=======
>>>>>>> Stashed changes
import { DatePicker, Timeline } from "antd";
import dayjs, { Dayjs } from "dayjs";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import { useEffect, useState } from "react";
import { TickSquare } from "react-iconly";
<<<<<<< Updated upstream
import { io } from "socket.io-client";
import { aidboxClient, socketIo } from "./client";

dayjs.extend(weekday);
dayjs.extend(localeData);

const appointmentData = {
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
=======
import { useUnit } from "effector-react";
import {
  $appointment,
  $appointmentStartTime,
  $isAppointmentUpdated,
  createAppointment,
  updateAppointment,
  updateStartTime,
} from "./model";
import { socketIo } from "./client";

dayjs.extend(weekday);
dayjs.extend(localeData);
>>>>>>> Stashed changes

export const prettifyDate = (dateString: string) => {
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

interface AppointmentInfoProps {
  patientName: string;
  startDate: string;
  description: string;
}

export const AppointmentInfo = ({
  patientName,
  startDate,
  description,
}: AppointmentInfoProps) => {
  return (
    <Grid.Container gap={0.5}>
      <Grid xs={12} alignItems="center" css={{ h: "30px" }}>
        <Badge variant="dot" color="primary" />
        <Text css={{ ml: "$2", pl: "10px" }} weight="bold">
          Patient name:
        </Text>
        &nbsp;
        <Text>{patientName}</Text>
      </Grid>
      <Grid xs={12} alignItems="center" css={{ h: "30px" }}>
        <Badge color="primary" variant="dot" />
        <Text css={{ ml: "$2", pl: "10px" }} weight="bold">
          Start time:
        </Text>
        &nbsp;
        <Text>{prettifyDate(startDate)}</Text>
      </Grid>
      <Grid xs={12} alignItems="center" css={{ h: "30px" }}>
        <Badge color="primary" variant="dot" />
        <Text css={{ ml: "$2", pl: "10px" }} weight="bold">
          Description:
        </Text>
        &nbsp;
        <Text>{description}</Text>
      </Grid>
    </Grid.Container>
  );
};

export const UpdateSample = ({
  config,
}: {
  config: {
    app_url: string;
    aidbox_url: string;
    aidbox_client: string;
    aidbox_secret: string;
    sqs_url: string;
  };
}) => {
<<<<<<< Updated upstream
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [appointmentStartTime, setAppointmentStartTime] = useState(
    dayjs(appointmentData.start)
  );
  const [isAppointmentUpdated, setIsAppointmentUpdated] = useState(false);
=======
  const [
    create,
    update,
    updateTime,
    appointment,
    startTime,
    isAppointmentUpdated,
  ] = useUnit([
    createAppointment,
    updateAppointment,
    updateStartTime,
    $appointment,
    $appointmentStartTime,
    $isAppointmentUpdated,
  ]);

>>>>>>> Stashed changes
  const [subsNotifications, setSubsNotifications] = useState(false);
  const [pushedAppointment, setPushedAppointment] = useState(false);
  const [pulledAppointment, setPulledAppointment] = useState(false);
  const [createdTasks, setCreatedTasks] = useState(false);

  useEffect(() => {
<<<<<<< Updated upstream
    const createAppointment = async () => {
      const data = await aidboxClient.createResource(
        "Appointment",
        appointmentData
      );
      setAppointment(data);
    };
    createAppointment().catch(console.error);
  }, []);

  const updateAppointment = async () => {
    if (appointment?.id) {
      const data = await aidboxClient.patchResource(
        "Appointment",
        appointment.id,
        { start: appointmentStartTime.toISOString() }
      );
      setAppointment(data);
      setAppointmentStartTime(dayjs(data.start));
      setTimeout(() => setIsAppointmentUpdated(true), 500);
    }
  };
=======
    create();
  }, []);
>>>>>>> Stashed changes

  useEffect(() => {
    socketIo.on("subs_notification_appointment", function (data) {
      if (data === appointment?.id) {
        setTimeout(() => setSubsNotifications(true), 1400);
      }
    });

    socketIo.on("push_appointment", function (data) {
      if (data === appointment?.id) {
        setTimeout(() => setPushedAppointment(true), 2400);
      }
    });

    socketIo.on("pull_appointment", function (data) {
      if (data === appointment?.id) {
        setPulledAppointment(true);
      }
    });

    socketIo.on("create_task_appointment", function (data) {
      if (data === appointment?.id) {
        setTimeout(() => setCreatedTasks(true), 500);
      }
    });
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    return () => {
      socketIo.off("subs_notification_appointment");
      socketIo.off("push_appointment");
      socketIo.off("pull_appointment");
      socketIo.off("create_task_appointment");
    };
  }, [appointment]);

  return (
    <>
      <Text h2>Update Appointment Subscription</Text>
      <Card>
        <Card.Body css={{ width: "auto" }}>
          <Container css={{ width: "auto" }} display="flex" wrap="wrap">
            <Text css={{ "text-align": "center", "margin-top": 0 }}>
              We have an appointment scheduled with the following details:
            </Text>
            {appointment ? (
              <AppointmentInfo
                patientName={appointment?.participant[0]?.actor?.display || ""}
                startDate={appointment?.start || ""}
                description={appointment?.description || ""}
              />
            ) : (
              <Loading />
            )}

            <Text>
              Let's update the start time and observe how the subscription
              feature works.
            </Text>
            <DatePicker
              style={{ borderColor: "#0072F5", borderRadius: "15px" }}
              showTime
              defaultValue={startTime}
              value={startTime}
              onChange={(date) => {
                if (date) {
<<<<<<< Updated upstream
                  setAppointmentStartTime(date as Dayjs);
                }
              }}
            />
            <Button onPress={updateAppointment} css={{ ml: "20px" }}>
=======
                  updateTime(date as Dayjs);
                }
              }}
            />
            <Button
              onPress={() =>
                update({ appointmentId: appointment?.id!, startTime })
              }
              css={{ ml: "20px" }}
            >
>>>>>>> Stashed changes
              Update start time
            </Button>
            {isAppointmentUpdated && (
              <Timeline
                style={{ marginTop: 30 }}
                items={[
                  {
                    color: isAppointmentUpdated ? "green" : "gray",
                    children: "Appointment updated",
                  },
                  {
                    color: subsNotifications ? "green" : "gray",
                    children: (
                      <>
                        <p>Subscriptions triggered</p>
                        <Link
                          block
                          href="https://github.com/Aidbox/aidbox-sdk-js/blob/d34cc06c9c8764ef00820abcfca9e9cc8fb2536e/examples/aidbox-subscription/backend/endpoints.ts#L177"
                          target="_blank"
                        >
                          See the code
                        </Link>
                      </>
                    ),
                  },
                  {
                    color: pushedAppointment ? "green" : "gray",
                    children: (
                      <>
                        <p>Event pushed to the queue</p>
                        <Link block href={config.sqs_url} target="_blank">
                          Check the queue UI
                        </Link>
                        <Link
                          block
                          href="https://github.com/Aidbox/aidbox-sdk-js/blob/d34cc06c9c8764ef00820abcfca9e9cc8fb2536e/examples/aidbox-subscription/backend/endpoints.ts#L92"
                          target="_blank"
                        >
                          See the code
                        </Link>
                      </>
                    ),
                  },
                  {
                    color: pulledAppointment ? "green" : "gray",
                    children: (
                      <>
                        <p>Event pulled from the queue</p>
                        <Link
                          block
                          href="https://github.com/Aidbox/aidbox-sdk-js/blob/d34cc06c9c8764ef00820abcfca9e9cc8fb2536e/examples/aidbox-subscription/backend/periodic-jobs.ts#L12"
                          target="_blank"
                        >
                          See the code
                        </Link>
                      </>
                    ),
                  },
                  {
                    color: createdTasks ? "green" : "gray",
                    children: (
                      <>
                        <p>Task resource created</p>
                        <p>
                          In the end, we've created a Task resource as a simple
                          example of business logic.
                        </p>
                        <Link
                          block
                          href="https://github.com/Aidbox/aidbox-sdk-js/blob/d34cc06c9c8764ef00820abcfca9e9cc8fb2536e/examples/aidbox-subscription/backend/workers.ts#L85"
                          target="_blank"
                        >
                          See the code
                        </Link>
                      </>
                    ),
                  },
                  {
                    color: createdTasks ? "green" : "gray",
                    dot: <TickSquare set="light" />,
                  },
                ]}
              />
            )}
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};
