import { Router, Request, Response } from 'express'

const router = Router()

// Example login route
router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body

  // Placeholder response
  res.json({
    message: 'Login route working',
    email,
    passwordReceived: !!password
  })
})

// Example register route
router.post('/register', (req: Request, res: Response) => {
  const { name, email } = req.body

  res.json({
    message: 'Register route working',
    name,
    email
  })
})

export default router
