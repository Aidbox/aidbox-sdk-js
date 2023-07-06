import socketioServer from 'fastify-socket.io'
import { Server } from "socket.io"
import { createApp } from './app'
import Fastify from 'fastify'



const fastify = Fastify({
  logger: true
})

fastify.register(socketioServer, { cors: { origin: '*' } })

declare module 'fastify' {
  interface FastifyInstance {
    io: Server
  }
}

fastify.get('/', async function handler(request, reply) {
  return 'Aidbox SDK Examples backend'
})


fastify.ready(err => {
  if (err) throw err

  fastify.io.on('connect', (socket) => fastify.log.info('Socket connected!', socket.id))
})


const main = async () => {
  const { app, config } = await createApp(fastify)
  try {
    await app.listen({ port: config.APP_PORT, host: '0.0.0.0' })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

main().catch(e => console.error(e))
