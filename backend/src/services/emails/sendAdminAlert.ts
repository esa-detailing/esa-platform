import { sendEmail } from './emailClient'

export const sendAdminAlert = async (message: string) => {
  const html = `
    <h2>Admin Alert</h2>
    <p>${message}</p>
  `

  return sendEmail({
    to: process.env.ADMIN_EMAIL!,
    subject: `Admin Alert`,
    html
  })
}
