import { Request, Response } from 'express'

const services = [
  { name: 'Mini Valet', basePrice: 40 },
  { name: 'Full Valet', basePrice: 80 },
  { name: 'Detailing', basePrice: 150 }
]

export const getServices = (req: Request, res: Response) => {
  res.json(services)
}

export const calculatePrice = (req: Request, res: Response) => {
  const { serviceName, vehicleType } = req.body

  const service = services.find((s) => s.name === serviceName)

  if (!service) {
    return res.status(404).json({ error: 'Service not found' })
  }

  let price = service.basePrice

  if (vehicleType === '4x4') price += 20
  if (vehicleType === 'van') price += 30

  res.json({ serviceName, vehicleType, price })
}
