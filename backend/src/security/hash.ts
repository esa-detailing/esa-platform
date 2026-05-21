import crypto from 'crypto'

export const hashValue = (value: string): string => {
  return crypto.createHash('sha256').update(value).digest('hex')
}

export const verifyHash = (value: string, hashed: string): boolean => {
  return hashValue(value) === hashed
}
