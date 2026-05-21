import { useNavigate } from 'react-router-dom'

export default function StepService() {
  const navigate = useNavigate()

  const handleNext = () => {
    navigate('/booking/review')
  }

  return (
    <div>
      <h1>Booking — Step 3: Choose Service</h1>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}
