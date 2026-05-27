import React from 'react'
import './CustomerReceipt.css'

export default function CustomerReceipt({ job = {} }) {
  const {
    customerName = 'Customer',
    vehicle = 'Vehicle',
    package: pkg = 'Service Package',
    total = '0.00'
  } = job

  return (
    <div className="receipt-container">
      <h1>Receipt</h1>

      <p>
        <strong>Customer:</strong> {customerName}
      </p>
      <p>
        <strong>Vehicle:</strong> {vehicle}
      </p>
      <p>
        <strong>Package:</strong> {pkg}
      </p>
      <p>
        <strong>Total Paid:</strong> £{total}
      </p>

      <p className="receipt-thanks">Thank you for choosing ESA Detailing.</p>
    </div>
  )
}
