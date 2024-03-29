export type SocketType = 'subs_notification_patient' | 'push_patient' | 'pull_patient' | 'create_task_patient' | 'subs_notification_appointment' | 'push_appointment' | 'pull_appointment' | 'create_task_appointment'
export type HandleSocket = (type: SocketType, patientId?: string) => void
