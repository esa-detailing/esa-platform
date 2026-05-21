import fs from 'fs'
import path from 'path'
import { encrypt, decrypt } from './encryption'

const STORE_PATH = path.join(__dirname, 'pin.secure.json')

interface PinData {
  hashedPin: string
  wrongAttempts: number
  lockUntil: number
}

const defaultData: PinData = {
  hashedPin: '',
  wrongAttempts: 0,
  lockUntil: 0
}

export const loadPinData = (): PinData => {
  if (!fs.existsSync(STORE_PATH)) {
    savePinData(defaultData)
    return defaultData
  }

  const encrypted = fs.readFileSync(STORE_PATH, 'utf8')
  const decrypted = decrypt(encrypted)
  return JSON.parse(decrypted)
}

export const savePinData = (data: PinData): void => {
  const encrypted = encrypt(JSON.stringify(data))
  fs.writeFileSync(STORE_PATH, encrypted, 'utf8')
}
