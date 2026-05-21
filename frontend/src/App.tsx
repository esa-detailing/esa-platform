import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookingMenu from './pages/BookingMenu'
import SpecialVehicles from './pages/SpecialVehicles'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookingMenu />} />
        <Route path="/special-vehicles" element={<SpecialVehicles />} />
      </Routes>
    </BrowserRouter>
  )
}
