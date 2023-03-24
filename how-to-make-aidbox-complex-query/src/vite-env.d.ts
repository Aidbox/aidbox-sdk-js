interface ImportMetaEnv {
    readonly VITE_AIDBOX_URL: string
    readonly VITE_AIDBOX_USERNAME: string
    readonly VITE_AIDBOX_SECRET: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
