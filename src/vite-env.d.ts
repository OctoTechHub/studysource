/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_KEY: string
    readonly VITE_PROJECT_ID: string
    readonly VITE_WALLET_ADDRESS: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }