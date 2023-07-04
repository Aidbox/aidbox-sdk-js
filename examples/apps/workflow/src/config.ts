import z from 'zod'

const configSchema = z.object({
    APP_URL: z.string(),
    APP_PORT: z.coerce.number(),
    SQS_URL: z.string(),
    SQS_ACCESS_KEY_ID: z.string(),
    SQS_SECRET_ACCESS_KEY: z.string(),
    SQS_REGION: z.string(),
    AIDBOX_URL: z.string(),
    AIDBOX_CLIENT_ID: z.string(),
    AIDBOX_CLIENT_SECRET: z.string()
})

export type Config = z.infer<typeof configSchema>

export const getConfig = () => {
    return configSchema.safeParse(process.env)
}
