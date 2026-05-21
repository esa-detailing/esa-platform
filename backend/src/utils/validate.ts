import { z } from 'zod'

export const bookingSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  registration: z.string().min(3),
  postcode: z.string().min(5),
  serviceId: z.number(),
  date: z.string(),
  notes: z.string().optional()
})

export const adminLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})
