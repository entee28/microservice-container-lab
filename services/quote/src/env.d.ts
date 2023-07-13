declare global {
  namespace NodeJS {
    interface ProcessEnv {
      COSMOS_URI: string
    }
  }
}

export {}
