import Fastify from 'fastify'
import socketioServer from 'fastify-socket.io'
import { createApp } from './app'
import { Server } from 'socket.io'


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


const main = async () => {
  const { app, config } = await createApp(fastify)
  try {
    await app.listen({ port: config.APP_PORT, host: '0.0.0.0' })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

if (require.main === module) {

  main().catch(e => console.error(e))
}
