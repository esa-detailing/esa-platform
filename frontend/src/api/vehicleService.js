import api from './apiClient'

export const lookupVehicle = async (reg) => {
  const response = await api.post('/lookup', { reg })
  return response.data
}
