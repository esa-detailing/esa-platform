import fs from 'fs'
import path from 'path'
import { encrypt, decrypt } from './encryption'

const LOG_PATH = path.join(__dirname, 'admin.access.log')

interface LogEntry {
  timestamp: number
  ip: string
  event: string
}

export const writeLog = (entry: LogEntry): void => {
  const line = encrypt(JSON.stringify(entry)) + '\n'
  fs.appendFileSync(LOG_PATH, line, 'utf8')
}

export const readLogs = (): LogEntry[] => {
  if (!fs.existsSync(LOG_PATH)) return []

  const lines = fs.readFileSync(LOG_PATH, 'utf8').trim().split('\n')

  return lines
    .map((line) => {
      try {
        return JSON.parse(decrypt(line))
      } catch {
        return null
      }
    })
    .filter(Boolean) as LogEntry[]
}
