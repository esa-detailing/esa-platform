import { useNavigate } from 'react-router-dom'

export default function StepDetails() {
  const navigate = useNavigate()

  const handleNext = () => {
    navigate('/booking/vehicle')
  }

  return (
    <div>
      <h1>Booking — Step 1: Your Details</h1>

      <button onClick={handleNext}>Next</button>
    </div>
  )
}
