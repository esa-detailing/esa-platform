import { sendEmail } from './emailClient'

export const sendSpecialVehicleEmail = async (data: any) => {
  const html = `
    <h2>Special Vehicle Request</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Vehicle Type:</strong> ${data.type}</p>
    <p><strong>Description:</strong> ${data.description}</p>
  `

  return sendEmail({
    to: process.env.ADMIN_EMAIL!,
    subject: `Special Vehicle Request: ${data.type}`,
    html
  })
}
