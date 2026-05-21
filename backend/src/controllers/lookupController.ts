import { Request, Response } from 'express'

export const lookupVehicle = async (req: Request, res: Response) => {
  const { reg } = req.body

  if (!reg) {
    return res.status(400).json({ error: 'Registration required' })
  }

  const vehicleData = {
    reg,
    make: 'Land Rover',
    model: 'Range Rover Sport',
    year: 2006,
    colour: 'Grey'
  }

  res.json(vehicleData)
}
