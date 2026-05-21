import { Resend } from 'resend'
import dotenv from 'dotenv'

dotenv.config()

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (options: { to: string; subject: string; html: string }) => {
  try {
    const response = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: options.to,
      subject: options.subject,
      html: options.html
    })

    return response
  } catch (error) {
    console.error('Email sending failed:', error)
    throw error
  }
}
