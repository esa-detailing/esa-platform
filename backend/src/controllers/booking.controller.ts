import { Request, Response } from 'express'

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body

  res.json({
    message: 'Login controller working',
    email,
    passwordReceived: !!password
  })
}

export const register = (req: Request, res: Response) => {
  const { name, email } = req.body

  res.json({
    message: 'Register controller working',
    name,
    email
  })
}
