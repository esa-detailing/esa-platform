import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.json([
    { id: 1, name: 'Full Valet' },
    { id: 2, name: 'Mini Valet' },
    { id: 3, name: 'Interior Deep Clean' }
  ])
})

export default router
