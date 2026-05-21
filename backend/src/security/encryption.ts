import crypto from 'crypto'

const ALGORITHM = 'aes-256-cbc'
const KEY = crypto
  .createHash('sha256')
  .update(String(process.env.SECRET_KEY || 'esa_default_key'))
  .digest('base64')
  .substring(0, 32)
const IV_LENGTH = 16

export const encrypt = (text: string): string => {
  const iv = crypto.randomBytes(IV_LENGTH)
  const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv)
  let encrypted = cipher.update(text, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  return iv.toString('hex') + ':' + encrypted
}

export const decrypt = (encryptedText: string): string => {
  const [ivHex, encrypted] = encryptedText.split(':')
  const iv = Buffer.from(ivHex, 'hex')
  const decipher = crypto.createDecipheriv(ALGORITHM, KEY, iv)
  let decrypted = decipher.update(encrypted, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}

export const generateToken = (length: number = 32): string => {
  return crypto.randomBytes(length).toString('hex')
}
