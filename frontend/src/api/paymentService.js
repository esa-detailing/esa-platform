import api from './apiClient'

export const createDepositSession = async (bookingId, amount) => {
  const response = await api.post('/payment/deposit', {
    bookingId,
    amount
  })

  return response.data // contains Stripe session URL
}
