import React, { useState } from 'react'
import CustomerJobStatus from '../pages/customer/CustomerJobStatus'
import CustomerLiveLocation from '../pages/customer/CustomerLiveLocation'
import CustomerJobComplete from '../pages/customer/CustomerJobComplete'

export default function CustomerRouter() {
  const [step, setStep] = useState('status')

  return (
    <>
      {step === 'status' && <CustomerJobStatus />}

      {step === 'live' && <CustomerLiveLocation />}

      {step === 'complete' && <CustomerJobComplete />}
    </>
  )
}
