/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GATEWAY_ENDPOINT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
