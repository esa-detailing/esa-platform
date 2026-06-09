import { submitBooking } from './apiBooking'

export async function handleFinalBooking(data, onSuccess, onError) {
  const result = await submitBooking(data)

  if (result && result.success) {
    onSuccess()
  } else {
    onError()
  }
}
