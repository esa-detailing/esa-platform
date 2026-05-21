import { Router, Request, Response } from 'express'

const router = Router()

router.get('/:reg', (req: Request, res: Response) => {
  const { reg } = req.params
  res.json({
    reg,
    make: 'Unknown',
    model: 'Unknown',
    year: 'Unknown'
  })
})

export default router
