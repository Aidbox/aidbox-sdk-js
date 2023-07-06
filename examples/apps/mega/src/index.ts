import Fastify from 'fastify'
import socketioServer from 'fastify-socket.io'
import { Server } from 'socket.io'
import { createApp } from 'subscription/src/app'
import { createApp as WorkflowApp } from 'workflow/src/app'

const fastify = Fastify({
  logger: true
})

fastify.register(socketioServer, { cors: { origin: '*' } })

declare module 'fastify' {
  interface FastifyInstance {
    io: Server
  }
}

fastify.get('/', async function handler (request, reply) {
  return 'Aidbox SDK Examples backend'
})

const main = async () => {
  const { app, config } = await createApp(fastify)
  await WorkflowApp(fastify)

  fastify.ready(err => {
    if (err) throw err

    fastify.io.on('connect', (socket) => fastify.log.info('Socket connected!', socket.id))
  })

  try {
    await app.listen({ port: config.APP_PORT, host: '0.0.0.0' })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

main().catch(console.error)
