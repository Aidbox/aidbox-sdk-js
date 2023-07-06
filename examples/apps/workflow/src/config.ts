import z from 'zod'

const configSchema = z.object({
    APP_URL: z.string(),
    APP_PORT: z.coerce.number(),
    AIDBOX_URL: z.string(),
    AIDBOX_CLIENT_ID: z.string(),
    AIDBOX_CLIENT_SECRET: z.string(),
    MAILGUN_DOMAIN: z.string().optional(),
    MAILGUN_API_KEY: z.string().optional(),
})

export type Config = z.infer<typeof configSchema>

export const getConfig = () => {
    return configSchema.safeParse(process.env)
}
