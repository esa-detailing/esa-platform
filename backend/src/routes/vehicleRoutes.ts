import { Router, Request, Response } from 'express'

const router = Router()

router.get('/types', (req: Request, res: Response) => {
  res.json(['car', 'van', '4x4', 'motorbike'])
})

export default router
