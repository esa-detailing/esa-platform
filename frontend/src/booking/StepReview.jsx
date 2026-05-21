import { useNavigate } from 'react-router-dom'

export default function StepReview() {
  const navigate = useNavigate()

  const handlePay = () => {
    navigate('/booking/success')
  }

  return (
    <div>
      <h1>Booking — Step 4: Review & Pay Deposit</h1>
      <button onClick={handlePay}>Pay Deposit</button>
    </div>
  )
}
