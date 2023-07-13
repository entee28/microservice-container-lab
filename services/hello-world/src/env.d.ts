declare global {
  namespace NodeJS {
    interface ProcessEnv {
      cosmosuri: string
    }
  }
}

export {}
