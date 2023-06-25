import * as http from 'http'

import * as dotenv from 'dotenv'
import { Server } from 'socket.io'

import { handleEndpoints } from './endpoints.js'
import { createSqsJobs } from './periodic-jobs.js'
import { handleSocket } from './socket.js'
import { createDefaultQueues } from './sqs.js'
import { createSubscriptions } from './subscriptions.js'

dotenv.config()
const port = 8000

export const queuesName = [
  'patient-sqs',
  'appointment-sqs',
  'observation-sqs',
  'encounter-sqs',
  'diagnosticreport-sqs'
]

await createDefaultQueues(queuesName)
await createSqsJobs(queuesName)

const server = http.createServer(async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json')
    await handleEndpoints(req, res)
  } catch (error: unknown) {
    console.dir(error, { depth: 9 })
    res.end(JSON.stringify({ error }))
    res.writeHead(400)
  }
})

export const io = new Server(server, {
  cors: { origin: '*' }
})

io.on('connection', (socket) => {
  console.log('We are live and connected')

  socket.on('disconnect', () => {
    console.log('A user disconnected')
  })
})

server.listen(port, () => {
  console.log(`Server is running on the port ${port}`)
})

await createSubscriptions()
