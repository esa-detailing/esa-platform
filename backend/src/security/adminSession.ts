import { generateToken } from './encryption'

let activeSession: {
  token: string
  created: number
  ip: string
} | null = null

const SESSION_LIFETIME = 6 * 60 * 60 * 1000 // 6 hours

export const createAdminSession = (ip: string): string => {
  const token = generateToken(32)

  activeSession = {
    token,
    created: Date.now(),
    ip
  }

  return token
}

export const validateAdminSession = (token: string, ip: string): boolean => {
  if (!activeSession) return false

  const expired = Date.now() - activeSession.created > SESSION_LIFETIME
  if (expired) {
    activeSession = null
    return false
  }

  return activeSession.token === token && activeSession.ip === ip
}
