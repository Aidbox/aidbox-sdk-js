import { io } from './index.js'

type SocketType = 'subs_notification_patient' | 'push_patient' |'pull_patient' | 'create_task'

export const handleSocket = (socketType: SocketType, patientId: string) => {
  io.emit(socketType, patientId)
}
