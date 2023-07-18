import {
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Input,
  Link,
  Text,
  useInput,
} from "@nextui-org/react";
import { useMemo } from "react";
import { useUnit } from "effector-react";
import { $appointment, createAppointment } from "./model";

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

interface SampleDescProps {
  createAppointment: (email: string) => void;
  appointmentId: string | null;
}

const validateEmail = (value: string) => {
  return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
};

export const SampleDesc = () => {
  const { createAppointment: create, $appointment: appointment } = useUnit({
    createAppointment,
    $appointment,
  });
  const { value, reset, bindings } = useInput("");

  const helper = useMemo((): {
    text?: "Correct email" | "Enter a valid email";
    color?: "success" | "error";
  } => {
    if (!value) {
      return {
        text: undefined,
        color: undefined,
      };
    }
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);

  return (
    <Card css={{ mt: "20px" }}>
      <Card.Body css={{ width: "auto" }}>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} md={6} direction="column">
            <Text css={{ "max-width": "80%", m: 0, mb: "16px" }}>
              We predefined following things in our zen-project:
            </Text>
            <Grid.Container gap={0.5}>
              <Grid xs={12} alignItems="center" css={{ h: "30px", mb: "10px" }}>
                <Badge variant="dot" color="primary" />
                <Text css={{ "max-width": "80%", pl: "10px", mb: 0 }}>
                  <Link
                    href="https://github.com/Aidbox/aidbox-sdk-js/blob/main/examples/zen-project/zrc/appointment-trigger.edn#L5"
                    target="_blank"
                  >
                    Appointment trigger
                  </Link>
                  &nbsp;that starts the workflow on
                  the&nbsp;appointment&#8288;-&#8288;creating event.
                </Text>
              </Grid>
              <Grid xs={12} alignItems="center" css={{ h: "30px" }}>
                <Badge color="primary" variant="dot" />
                <Text css={{ "max-width": "80%", pl: "10px", my: 0 }}>
                  <Link
                    href="https://github.com/Aidbox/aidbox-sdk-js/blob/main/examples/zen-project/zrc/notification.edn#L15"
                    target="_blank"
                  >
                    Workflow definition
                  </Link>
                </Text>
              </Grid>
              <Grid xs={12} alignItems="center" css={{ h: "30px" }}>
                <Badge color="primary" variant="dot" />
                <Text css={{ "max-width": "80%", pl: "10px", my: 0 }}>
                  <Link
                    href="https://github.com/Aidbox/aidbox-sdk-js/blob/main/examples/zen-project/zrc/notification.edn#L4"
                    target="_blank"
                  >
                    Task definition
                  </Link>
                </Text>
              </Grid>
            </Grid.Container>
            <Text css={{ "max-width": "80%" }}>
              And created&nbsp;
              <Link
                href="https://github.com/Aidbox/aidbox-sdk-js/blob/main/examples/apps/workflow/src/app.ts"
                target="_blank"
              >
                business logic
              </Link>{" "}
              to send patient an email notifications with the depression form
              two days before an appointment.
            </Text>
          </Grid>
          <Grid xs={6} md={6}>
            <Container css={{ width: "auto" }} display="flex" wrap="wrap">
              {appointment?.id && (
                <Text css={{ "text-align": "center", mt: 0, my: 0 }}>
                  We have data for appointment with following information:
                </Text>
              )}
              {!appointment?.id && (
                <Text css={{ "text-align": "center", mt: 0, my: 0 }}>
                  Please provide your email to send you the notification at the
                  end of the workflow:
                </Text>
              )}

              <Grid.Container gap={0.5}>
                <Grid xs={12} alignItems="center">
                  <Badge variant="dot" color="primary" />
                  <Text css={{ ml: "$2", pl: "10px", my: 0 }} weight="bold">
                    Patient email:
                  </Text>
                  {!appointment?.id && (
                    <Input
                      css={{ ml: "10px", my: "5px", width: "75%" }}
                      {...bindings}
                      clearable
                      shadow={false}
                      onClearClick={reset}
                      status={helper.color}
                      color={helper.color}
                      helperColor={helper.color}
                      helperText={helper.text}
                      type="email"
                      placeholder="type email"
                    />
                  )}

                  {appointment?.id && (
                    <Text css={{ my: "10px" }}>&nbsp;{value}</Text>
                  )}
                </Grid>
                <Grid xs={12} alignItems="center" css={{ h: "30px" }}>
                  <Badge color="primary" variant="dot" />
                  <Text css={{ ml: "$2", pl: "10px", my: 0 }} weight="bold">
                    Appointment start time:
                  </Text>
                  &nbsp;
                  <Text css={{ my: 0 }}>
                    {prettifyDate(appointment?.start || "")}
                  </Text>
                </Grid>
                <Grid xs={12} alignItems="center" css={{ h: "30px" }}>
                  <Badge color="primary" variant="dot" />
                  <Text css={{ ml: "$2", pl: "10px", my: 0 }} weight="bold">
                    Description:
                  </Text>
                  &nbsp;
                  <Text css={{ my: 0 }}>{appointment?.description || ""}</Text>
                </Grid>
              </Grid.Container>
              <Text css={{ mb: "10px", width: "80%" }}>
                Let's create patient and appointment to run the workflow and
                observe how it works.
              </Text>
              {appointment?.id ? (
                <Button color="success">Patient and appointment created</Button>
              ) : (
                <Button
                  onPress={() => {
                    create(value);
                  }}
                  disabled={!validateEmail(value)}
                >
                  Create patient and appointment
                </Button>
              )}
            </Container>
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
};
