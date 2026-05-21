import api from './apiClient'

export const getServices = async () => {
  const response = await api.get('/services')
  return response.data
}

export const getServicePrice = async (serviceName, vehicleType) => {
  const response = await api.post('/services/price', {
    serviceName,
    vehicleType
  })

  return response.data
}
