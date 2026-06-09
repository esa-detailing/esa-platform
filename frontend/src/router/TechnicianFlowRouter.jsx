import React, { useState } from 'react'
import TechnicianArrival from '../pages/technician/TechnicianArrival'
import TechnicianTravelStart from '../pages/technician/TechnicianTravelStart'
import TechnicianShareLocation from '../pages/technician/TechnicianShareLocation'
import TechnicianGPS from '../pages/technician/TechnicianGPS'
import TechnicianJobTimer from '../pages/technician/TechnicianJobTimer'
import TechnicianActions from '../pages/technician/TechnicianActions'
import TechnicianPhotos from '../pages/technician/TechnicianPhotos'
import TechnicianWatermark from '../pages/technician/TechnicianWatermark'
import TechnicianComplete from '../pages/technician/TechnicianComplete'

export default function TechnicianFlowRouter() {
  const [step, setStep] = useState('arrival')
  const [photos, setPhotos] = useState([])

  const customerNumber = '447841410122'

  return (
    <>
      {step === 'arrival' && (
        <TechnicianArrival customerNumber={customerNumber} onArrive={() => setStep('travel')} />
      )}

      {step === 'travel' && (
        <TechnicianTravelStart
          customerNumber={customerNumber}
          onStart={() => setStep('shareloc')}
        />
      )}

      {step === 'shareloc' && (
        <TechnicianShareLocation customerNumber={customerNumber} onNext={() => setStep('gps')} />
      )}

      {step === 'gps' && <TechnicianGPS />}

      {step === 'timer' && <TechnicianJobTimer />}

      {step === 'actions' && (
        <TechnicianActions customerNumber={customerNumber} onComplete={() => setStep('photos')} />
      )}

      {step === 'photos' && (
        <TechnicianPhotos
          onComplete={(p) => {
            setPhotos(p)
            setStep('watermark')
          }}
        />
      )}

      {step === 'watermark' && (
        <TechnicianWatermark photos={photos} onDone={() => setStep('complete')} />
      )}

      {step === 'complete' && <TechnicianComplete />}
    </>
  )
}
