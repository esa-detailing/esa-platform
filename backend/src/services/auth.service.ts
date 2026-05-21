import { prisma } from '../config/database'
import { comparePassword } from '../utils/hash'
import { signToken } from '../utils/jwt'

export async function adminLogin(email: string, password: string) {
  const admin = await prisma.admin.findUnique({ where: { email } })
  if (!admin) throw { status: 401, message: 'Invalid credentials' }

  const match = await comparePassword(password, admin.password)
  if (!match) throw { status: 401, message: 'Invalid credentials' }

  const token = signToken({ adminId: admin.id })
  return { token }
}
