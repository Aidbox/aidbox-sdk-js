import {
  Button,
  Card,
  Container,
  Link,
  Progress,
  Text,
} from "@nextui-org/react";
<<<<<<< Updated upstream
import { Timeline } from "antd";
import { useEffect, useState } from "react";
import { Plus, TickSquare } from "react-iconly";
import { aidboxClient, socketIo } from "./client";
=======
import { Client } from "aidbox-sdk";
import { Timeline } from "antd";
import { useEffect, useState } from "react";
import { Plus, TickSquare } from "react-iconly";
import { io } from "socket.io-client";
import { socketIo } from "./client";
>>>>>>> Stashed changes

const Patient = {
  resourceType: "Patient",
  active: true,
  name: [
    {
      use: "official",
      family: "Chalmers",
      given: ["Peter", "James"],
    },
  ],
  telecom: [
    {
      use: "home",
    },
    {
      system: "phone",
      value: "(03) 5555 6473",
      use: "work",
      rank: 1,
    },
    {
      system: "phone",
      value: "(03) 3410 5613",
      use: "mobile",
      rank: 2,
    },
  ],
  gender: "male",
  birthDate: "1974-12-25",
  address: [
    {
      use: "home",
      type: "both",
      text: "534 Erewhon St PeasantVille, Rainbow, Vic  3999",
      line: ["534 Erewhon St"],
      city: "PleasantVille",
      district: "Rainbow",
      state: "Vic",
      postalCode: "3999",
      period: {
        start: "1974-12-25",
      },
    },
  ],
};

const countProgressPercent = (arr: Array<string>) => (arr.length / 10) * 100;

export const CreateSample = ({
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
  const [patientsCreated, setPatientsCreated] = useState(false);
  const [subsNotifications, setSubsNotifications] = useState<string[]>([]);
  const [pushedPatients, setPushedPatients] = useState<string[]>([]);
  const [pulledPatients, setPulledPatients] = useState<string[]>([]);
  const [createdTasks, setCreatedTasks] = useState<string[]>([]);

  const createPatients = async () => {
<<<<<<< Updated upstream
=======
    const aidboxClient = new Client(config.aidbox_url, {
      username: config.aidbox_client,
      password: config.aidbox_secret,
    });
>>>>>>> Stashed changes
    await aidboxClient.bundleRequest(
      aidboxClient.transformToBundle(Array(10).fill(Patient), "POST")
    );

    setPatientsCreated(true);
  };

  useEffect(() => {
    socketIo.on("subs_notification_patient", function (data) {
      setTimeout(
        () =>
          setSubsNotifications((subsNotifications) => [
            ...subsNotifications,
            data,
          ]),
        400
      );
    });
    socketIo.on("push_patient", function (data) {
      setTimeout(
        () => setPushedPatients((pushedPatients) => [...pushedPatients, data]),
        400
      );
    });

    socketIo.on("pull_patient", function (data) {
      setTimeout(
        () => setPulledPatients((pulledPatients) => [...pulledPatients, data]),
        400
      );
    });

    socketIo.on("create_task_patient", function (data) {
      setTimeout(
        () => setCreatedTasks((createdTasks) => [...createdTasks, data]),
        400
      );
    });

    return () => {
      socketIo.off();
    };
  }, []);

  return (
    <>
      <Text h2>Create Patient Subscription</Text>
      <Card>
        <Card.Body css={{ width: "auto", display: "block" }}>
          <Container
            css={{ width: "auto" }}
            display="flex"
            wrap="wrap"
            direction="column"
          >
            <Text css={{ "text-align": "center", "margin-top": 0 }}>
              We can create 10 patients and observe how the subscription feature
              works.
            </Text>
            {patientsCreated ? (
              <>
                <Button color="success" icon={<TickSquare set="light" />}>
                  Patients Created
                </Button>
                {
                  <Timeline
                    style={{ marginTop: 30 }}
                    items={[
                      {
                        color: subsNotifications ? "green" : "gray",
                        children: (
                          <>
                            <p>Subscriptions triggered</p>
                            <Progress
                              color="primary"
                              value={countProgressPercent(subsNotifications)}
                              striped
                            />
                            <Link
                              block
                              href="https://github.com/Aidbox/aidbox-sdk-js/blob/8ea42b1c0bdf41d61257bdb3a0452e7dbcc15eb6/examples/aidbox-subscription/backend/endpoints.ts#L137"
                              target="_blank"
                            >
                              See the code
                            </Link>
                          </>
                        ),
                      },
                      {
                        color: pushedPatients ? "green" : "gray",
                        children: (
                          <>
                            <p>Event pushed to the queue</p>
                            <Progress
                              color="primary"
                              value={countProgressPercent(pushedPatients)}
                              striped
                            />
                            <Link block href={config.sqs_url} target="_blank">
                              Check the queue UI
                            </Link>
                            <Link
                              block
                              href="https://github.com/Aidbox/aidbox-sdk-js/blob/8ea42b1c0bdf41d61257bdb3a0452e7dbcc15eb6/examples/aidbox-subscription/backend/endpoints.ts#L11C3-L11C3"
                              target="_blank"
                            >
                              See the code
                            </Link>
                          </>
                        ),
                      },
                      {
                        color: pulledPatients ? "green" : "gray",
                        children: (
                          <>
                            <p>Events pulled from the queue</p>
                            <Progress
                              color="primary"
                              value={countProgressPercent(pulledPatients)}
                              striped
                            />
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
                              In the end, we've created a Task resource as a
                              simple example of business logic.
                            </p>
                            <Progress
                              color="primary"
                              value={countProgressPercent(createdTasks)}
                              striped
                            />
                            <Link
                              block
                              href="https://github.com/Aidbox/aidbox-sdk-js/blob/8ea42b1c0bdf41d61257bdb3a0452e7dbcc15eb6/examples/aidbox-subscription/backend/workers.ts#L5"
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
                }
              </>
            ) : (
              <Button onPress={createPatients} icon={<Plus set="light" />}>
                Create 10 patients
              </Button>
            )}
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};
