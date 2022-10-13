interface Vars {
  NAME: string
  OS: string
  [pName: string]: string
}

// todo
declare const env: Vars

const sysName = env.NAME

const os = env.OS

const nodeEnv = env.NODE_ENV
