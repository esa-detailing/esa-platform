import React from 'react'
import './StripeDeposit.css'

export default function StripeDeposit({ amount, onPay }) {
  return (
    <div className="deposit-box">
      <h2>Deposit Payment</h2>
      <p>50% deposit required to secure your booking.</p>

      <button className="deposit-button" onClick={onPay}>
        Pay £{amount} Deposit
      </button>
    </div>
  )
}
