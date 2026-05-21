import { Link } from 'react-router-dom'

export default function BookingMenu() {
  return (
    <div className="booking-menu">
      <Link to="/car-valets" className="service-tile">
        Car Valets
      </Link>
      <Link to="/van-valets" className="service-tile">
        Van Valets
      </Link>
      <Link to="/addons" className="service-tile">
        Add-ons
      </Link>

      <Link to="/special-vehicles" className="service-tile special">
        <div className="icon">⭐</div>
        <h3>Special Vehicles</h3>
        <p>Jet Skis, Boats, ATVs, Motorbikes</p>
      </Link>
    </div>
  )
}
