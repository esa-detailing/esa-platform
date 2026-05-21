import { Router, Request, Response } from 'express'

const router = Router()

router.get('/:postcode', (req: Request, res: Response) => {
  const { postcode } = req.params
  res.json({ postcode, valid: true })
})

export default router
