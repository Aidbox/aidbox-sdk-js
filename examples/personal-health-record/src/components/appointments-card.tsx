import { Appointment, Practitioner, PractitionerRole } from 'aidbox-sdk/types'
import dayjs from 'dayjs'
import { useCallback, useEffect, useState } from 'react'

import ClockIcon from '../assets/clock.svg'
import UserIcon from '../assets/user.svg'
import { CardWrapper } from '../shared/card'
import { Divider } from '../shared/divider/divider'
import { formatDate, transformName } from '../utils'
import { client } from '../utils/aidbox-client'

import styles from './workspace.module.css'

export function AppointmentsCard ({ id: patient_id }: { id: string }) {
  const [nextAppointment, setNextAppointment] = useState<Appointment>()
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [total, setTotal] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  const getNextAppointment = useCallback(async () => {
    const response = await client
      .getResources('Appointment')
      .where('patient', `Patient/${patient_id}`)
      .where('date', new Date().toISOString(), 'gt')
      .sort('date', 'asc')

    if (response.entry.length > 0) {
      setNextAppointment(response?.entry[0].resource ?? {})
    }
    setLoading(false)
    return response.entry.length > 0
  }, [patient_id])

  const getAppointments = useCallback(async () => {
    const response = await client
      .getResources('Appointment')
      .where('patient', `Patient/${patient_id}`)

    if (response.entry.length > 0) {
      setAppointments(response?.entry.map((r) => r.resource))
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTotal(response.total)
    }
    setLoading(false)
  }, [patient_id])

  useEffect(() => {
    getNextAppointment().then((haveNextAppointment) => {
      if (!haveNextAppointment) {
        getAppointments()
      }
    })
  }, [getAppointments, getNextAppointment])

  const nextAppointmentAction = {
    label: 'Manage Appointment',
    onClick: () => ({})
  }

  const appointmentsAction = {
    label: 'Show all',
    onClick: () => ({})
  }

  const bottomAction = getButtonAction({
    appointments,
    nextAppointment,
    nextAppointmentAction,
    appointmentsAction
  })

  const title = nextAppointment
    ? 'Next Appointment'
    : 'Appointments' + (total > 0 ? `(${total})` : '')

  return (
    <CardWrapper
      loading={loading}
      alignCenter={!!nextAppointment}
      empty={!nextAppointment && total === 0}
      title={title}
      bottomActions={bottomAction}
    >
      {nextAppointment
        ? (
          <NextAppointment appointment={nextAppointment} />
        )
        : (
          <Appointments appointments={appointments} />
        )}
    </CardWrapper>
  )
}

interface ButtonActionProps {
  appointments: Appointment[];
  nextAppointment?: Appointment;
  nextAppointmentAction: {
    label: string;
    onClick: () => void;
  };
  appointmentsAction: {
    label: string;
    onClick: () => void;
  };
}

function getButtonAction ({
  appointments,
  nextAppointment,
  nextAppointmentAction,
  appointmentsAction
}: ButtonActionProps) {
  if (nextAppointment) {
    return [nextAppointmentAction, appointmentsAction]
  }
  if (appointments.length) {
    return appointmentsAction
  }
  return undefined
}

interface NextAppointmentProps {
  appointment: Appointment;
}
function NextAppointment ({ appointment }: NextAppointmentProps) {
  const [practitionerRole, setPractitionerRole] = useState<PractitionerRole>()
  const [practitioner, setPractitioner] = useState<Practitioner>()

  async function getPractitionerRole (id: string) {
    const response = await client
      .getResources('PractitionerRole')
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .where('.practitioner.reference', `Practitioner/${id}`)

    if (response.entry.length > 0) {
      setPractitionerRole(response.entry[0].resource)
    }

    return response.entry.length > 0
  }

  async function getPractitioner (id: string) {
    const practitioner = await client.getResource('Practitioner', id)

    if (!(practitioner instanceof Error)) {
      setPractitioner(practitioner)
    }
  }

  useEffect(() => {
    const practitioner = appointment.participant?.find(
      (p: any) => p.actor?.resourceType === 'Practitioner'
    )
    const id = practitioner?.actor?.id
    if (id) {
      getPractitionerRole(id).then((practitionerRole) => {
        if (!practitionerRole) {
          getPractitioner(id as string)
        }
      })
    }
  }, [appointment.participant])
  const startDate = dayjs(new Date(appointment.start ?? '')).format('dd MMMM')
  const startTime =
    appointment.start && dayjs(new Date(appointment.start)).format('hh:mm a')
  const endTime =
    appointment.end && dayjs(new Date(appointment.end)).format('hh:mm a')

  const time = startTime ? startTime + (endTime ? ' - ' + endTime : '') : null

  const practitionerName =
    practitionerRole?.practitioner?.display ??
    transformName(practitioner?.name)

  return (
    <div style={{ padding: '1rem 0.5rem' }}>
      <h4 style={{ fontSize: '2rem' }}>{startDate}</h4>
      <div
        style={{
          display: 'flex',
          marginTop: '0.7rem',
          gap: '0.3rem',
          flexDirection: 'column'
        }}
      >
        {time && <RowWithIcon
          icon={<ClockIcon />}
          value={time}
                 />}

        {practitionerName && (
          <RowWithIcon
            icon={<UserIcon />}
            value={[
              practitionerName,
              practitionerRole?.specialty?.[0]?.coding?.[0]?.display
            ]}
          />
        )}
      </div>
    </div>
  )
}

interface AppointmentProps {
  appointments: Appointment[];
}

function Appointments ({ appointments }: AppointmentProps) {
  return (
    <div>
      {appointments.map((appointment, index) => (
        <>
          <div
            key={appointment.id}
            style={{
              display: 'grid',
              gridTemplateColumns: '5fr 1fr',
              alignItems: 'center'
            }}
          >
            <p
              style={{
                fontSize: '1rem',
                fontWeight: '500',
                maxWidth: '90%',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
              }}
            >
              {appointment.description}
            </p>
            <p
              style={{
                textTransform: 'capitalize',
                fontSize: '0.8rem',
                fontWeight: '500'
              }}
            >
              {appointment.status}
            </p>
            <p className={styles.cardSmallText}>
              {formatDate(appointment.start ?? '')}
            </p>
          </div>
          {index !== appointments.length - 1 && (
            <Divider verticalMargin={'0.5rem'} />
          )}
        </>
      ))}
    </div>
  )
}

interface RowWithIconProps {
  icon: JSX.Element;
  value: string | (string | undefined)[];
}
function RowWithIcon ({ icon, value }: RowWithIconProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0.6rem',
        alignItems: 'center'
      }}
    >
      <div style={{ width: '22px', height: '22px' }}>{icon}</div>
      <div>
        {Array.isArray(value)
          ? (
            value.map(
              (text, index) =>
                text && (
                  <p
                    style={{
                      lineHeight: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}
                    key={index}
                  >
                    {text}
                  </p>
                )
            )
          )
          : (
            <p style={{ fontSize: '0.9rem', fontWeight: 500 }}>{value}</p>
          )}
      </div>
    </div>
  )
}
