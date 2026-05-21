import { prisma } from '../config/database'
import { lookupVehicle } from './dvla.service'
import { isValidUkPostcode } from './postcode.service'

interface BookingInput {
  name: string
  email: string
  phone: string
  registration: string
  postcode: string
  serviceId: number
  date: string
  notes?: string
}

export async function createBooking(input: BookingInput) {
  if (!isValidUkPostcode(input.postcode)) {
    throw { status: 400, message: 'Invalid UK postcode' }
  }

  const vehicleData = await lookupVehicle(input.registration)

  const user = await prisma.user.upsert({
    where: { email: input.email },
    update: { name: input.name, phone: input.phone },
    create: { name: input.name, email: input.email, phone: input.phone }
  })

  const vehicle = await prisma.vehicle.upsert({
    where: { registration: vehicleData.registration },
    update: {
      make: vehicleData.make,
      model: vehicleData.model,
      color: vehicleData.color
    },
    create: {
      registration: vehicleData.registration,
      make: vehicleData.make,
      model: vehicleData.model,
      color: vehicleData.color
    }
  })

  const booking = await prisma.booking.create({
    data: {
      userId: user.id,
      vehicleId: vehicle.id,
      serviceId: input.serviceId,
      date: new Date(input.date),
      notes: input.notes
    }
  })

  return booking
}

export async function listBookings() {
  return prisma.booking.findMany({
    orderBy: { createdAt: 'desc' },
    include: { user: true, vehicle: true, service: true }
  })
}
