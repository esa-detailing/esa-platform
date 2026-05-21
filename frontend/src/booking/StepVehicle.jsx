import { useNavigate } from 'react-router-dom'

export default function StepVehicle() {
  const navigate = useNavigate()

  const handleNext = () => {
    navigate('/booking/service')
  }

  return (
    <div>
      <h1>Booking — Step 2: Vehicle Details</h1>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}
