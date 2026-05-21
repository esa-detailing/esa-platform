import { sendEmail } from './emailClient'

export const sendBookingEmail = async (booking: any) => {
  const html = `
    <h2>New Booking Received</h2>
    <p><strong>Name:</strong> ${booking.name}</p>
    <p><strong>Email:</strong> ${booking.email}</p>
    <p><strong>Phone:</strong> ${booking.phone}</p>
    <p><strong>Vehicle:</strong> ${booking.vehicle}</p>
    <p><strong>Service:</strong> ${booking.service}</p>
    <p><strong>Date:</strong> ${booking.date}</p>
  `

  return sendEmail({
    to: process.env.ADMIN_EMAIL!,
    subject: `New Booking from ${booking.name}`,
    html
  })
}
