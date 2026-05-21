import { Request, Response } from 'express'

let specialRequests: any[] = []

export const createSpecialRequest = (req: Request, res: Response) => {
  const request = {
    id: Date.now(),
    ...req.body,
    createdAt: new Date()
  }

  specialRequests.push(request)

  res.json({
    message: 'Special vehicle request received',
    request
  })
}

export const listSpecialRequests = (req: Request, res: Response) => {
  res.json({
    message: 'Special vehicle requests',
    requests: specialRequests
  })
}
