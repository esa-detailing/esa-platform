import './Home.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="home-container">
      <h1>ESA Detailing</h1>

      <Link href="/ServiceMode" className="home-btn">
        Book a Service
      </Link>
    </div>
  )
}
