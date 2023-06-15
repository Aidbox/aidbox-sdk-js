import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { readFile, writeFile } from 'fs/promises';
import prompts from 'prompts';
import prettier from 'prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const parseJwt = (token: string) => {
    if (token.includes(".")) {
        return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    } else {
        return null
    }
}

const indexEnv = {
    PGIMAGE: 'healthsamurai/aidboxdb:15.2',
    PGHOSTPORT: '5437',
    PGUSER: 'postgres',
    PGPASSWORD: 'postgres',
    PGDATABASE: 'aidbox',
    AIDBOX_IMAGE: 'healthsamurai/aidboxone:latest',
    BOX_PROJECT_GIT_TARGET__PATH: '/zen-project',
    AIDBOX_ZEN_ENTRYPOINT: 'system/box',
    AIDBOX_FHIR_VERSION: '4.0.1',
    AIDBOX_ZEN_DEV_MODE: 'true',
    AIDBOX_BASE_URL: 'http://localhost:8888',
    AIDBOX_PORT: '8888',
    NODE_APP_URL: 'http://host.docker.internal:8000',
    SQS_URL: 'http://localhost:9324',
    SQS_ACCESS_KEY_ID: 'accessKeyId',
    SQS_SECRET_ACCESS_KEY: 'secretAccessKey',
    SQS_REGION: 'eu-central-1',
    AIDBOX_CLIENT_ID: "demo",
    AIDBOX_CLIENT_SECRET: "demosecret",
    AIDBOX_ADMIN_PASSWORD: "password"
}

const writeMainEnv = async () => {
    const currentLicense = await readFile(resolve(__dirname, "..", ".env"))
        .then((b) => {
            const env: Record<string, string> = {};
            b.toString().replace(/(\w+)=(.+)/g, ($0, $1, $2) => { env[$1] = $2; return $0 })
            return env["AIDBOX_LICENSE"]
        }).catch(() => null)


    const { value } = await prompts({
        ...{
            type: "text",
            name: 'value',
            message: 'Please provide your Aidbox License',
            validate: (value) => {
                const parsed = parseJwt(value);
                if (parsed) {
                    if (new Date() > new Date(parsed.expiration)) {
                        return "License already expired."
                    } else if (parsed.status !== "active") {
                        return "License not active."
                    } else if (parsed.product !== "aidbox") {
                        return `License created for ${parsed.product}. You should create license for aidbox`
                    } else {
                        return true
                    }
                } else {
                    return 'Unrecognized license format'
                }
            }
        }, ...(currentLicense ? { initial: currentLicense } : {})
    });
    const result: Record<string, string> = { ...indexEnv, ["AIDBOX_LICENSE"]: value };
    await writeFile(resolve(__dirname, "..", ".env"),
        Object.keys(result).reduce((acc, key) => {
            acc.push(`${key}=${result[key]}`)
            return acc
        }, [] as string[]).join("\n"))
}
const addConfig = async () => {
    await writeFile(resolve(__dirname, "..", "shared", "config.ts"),
        prettier.format(`export const config = {
        url: "${indexEnv["AIDBOX_BASE_URL"]}",
        client: "${indexEnv["AIDBOX_CLIENT_ID"]}",
        secret: "${indexEnv["AIDBOX_CLIENT_SECRET"]}"
    }`, { semi: false, parser: "typescript" }))
}

export const main = async () => {
    await writeMainEnv();
    await addConfig();
}


main();
