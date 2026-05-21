import twilio from 'twilio'

const client = twilio(process.env.TWILIO_SID as string, process.env.TWILIO_AUTH as string)

export const sendWhatsApp = async (to: string, message: string) => {
  await client.messages.create({
    from: 'whatsapp:+14155238886',
    to: `whatsapp:${to}`,
    body: message
  })

  return true
}
