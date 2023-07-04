import { createApp } from './app'

const main = async () => {
  const { app, config } = await createApp()
  try {
    await app.listen({ port: config.APP_PORT, host: '0.0.0.0' })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

main().catch(e => console.error(e))
