import api from './apiClient'

export const createBooking = async (bookingData) => {
  const response = await api.post('/booking', bookingData)
  return response.data
}

export const getAllBookings = async () => {
  const response = await api.get('/booking')
  return response.data
}
