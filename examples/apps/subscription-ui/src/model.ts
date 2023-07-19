import { createEffect, createEvent, createStore, sample } from "effector";
import { aidboxClient } from "./client";
import { Appointment } from "aidbox-sdk/types";
import dayjs, { Dayjs } from "dayjs";

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

export const $appointment = createStore<Appointment | null>(null);
export const $appointmentStartTime = createStore<Dayjs>(
  dayjs(appointmentData.start)
);

export const createAppointment = createEvent();

const createAppointmentFx = createEffect<void, Appointment>(async () => {
  const data = await aidboxClient.createResource(
    "Appointment",
    appointmentData
  );
  return data;
});

export const updateAppointment = createEvent<{
  appointmentId: string;
  startTime: Dayjs;
}>();

export const updateStartTime = createEvent<Dayjs>();

const updateAppointmentFx = createEffect<
  { appointmentId: string; startTime: Dayjs },
  Appointment
>(async ({ appointmentId, startTime }) => {
  const data = await aidboxClient.patchResource("Appointment", appointmentId, {
    start: startTime.toISOString(),
  });

  return data;
});

export const $isAppointmentUpdated = createStore<boolean>(false).on(
  updateAppointmentFx.doneData,
  () => true
);

sample({ clock: createAppointment, target: createAppointmentFx });
sample({ clock: updateAppointment, target: updateAppointmentFx });
sample({ clock: updateStartTime, target: $appointmentStartTime });
sample({ clock: createAppointmentFx.doneData, target: $appointment });
sample({ clock: updateAppointmentFx.doneData, target: $appointment });
sample({
  clock: updateAppointmentFx.done,
  filter: ({ result }) => !!result,
  fn: ({ result }) => dayjs(result.start),
  target: $appointmentStartTime,
});
