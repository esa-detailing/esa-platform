import { writeLog } from './accessLog'

const SUSPICIOUS_THRESHOLD = 5
const WINDOW_MS = 10 * 60 * 1000 // 10 minutes

const ipAttempts: Record<string, number[]> = {}

export const recordAttempt = (ip: string): void => {
  const now = Date.now()

  if (!ipAttempts[ip]) ipAttempts[ip] = []
  ipAttempts[ip].push(now)

  ipAttempts[ip] = ipAttempts[ip].filter((t) => now - t < WINDOW_MS)

  if (ipAttempts[ip].length >= SUSPICIOUS_THRESHOLD) {
    writeLog({
      timestamp: now,
      ip,
      event: 'SUSPICIOUS_ACTIVITY'
    })
  }
}

export const isSuspicious = (ip: string): boolean => {
  const now = Date.now()
  if (!ipAttempts[ip]) return false

  ipAttempts[ip] = ipAttempts[ip].filter((t) => now - t < WINDOW_MS)

  return ipAttempts[ip].length >= SUSPICIOUS_THRESHOLD
}
