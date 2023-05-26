import React, { useState } from 'react';

import Stepper from 'react-stepper-horizontal';

import FirstStep from './Components/FirstStep'
import SecondStep from './Components/SecondStep'
import ThirdStep from './Components/ThirdStep'
import FourthStep from './Components/FourthStep'
import Button from './Components/Button'

import './App.css'
import './index.css'

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 3;

  const steps = [
    { title: 'Mis Datos' },
    { title: 'Mi Apartamento' },
    { title: 'Características exteriores' },
    { title: 'Resumen' },
  ];

  const handleStepChange = (step) => {
    const newStep = currentStep + step;

    if (newStep >= 0 && newStep <= totalSteps) {
      setCurrentStep(newStep);
    }
  };
  
  return (
    <>
    <Stepper
        steps={steps}
        activeStep={currentStep}
        activeColor="#7c0cff"
        completeColor="#01c29c"
        completeBarColor="#01c29c"
        completeBorderColor="#7c0cff"
        circleFontColor="#ffffff"
        size={40}
        circleFontSize={18}
        titleFontSize={14}
        onClick={handleStepChange}
      />

      <div className="main-card">
      {currentStep === 0 && (
        <div>
         <FirstStep/>
         <div className='btn-group'>
          <Button
            handleStepChange={handleStepChange}
            direction="forward"
          />
         </div>
        </div>
      )}
      {currentStep === 1 && (
        <div>
        <SecondStep/>
        <div className='btn-group'>
         <Button
            handleStepChange={handleStepChange}
            direction="backward"
          />
          <Button
            handleStepChange={handleStepChange}
            direction="forward"
          />
         </div>
        </div>
      )}
      {currentStep === 2 && (
        <div>
          <ThirdStep/>
          <div className='btn-group'>
         <Button
            handleStepChange={handleStepChange}
            direction="backward"
          />
          <Button
            handleStepChange={handleStepChange}
            direction="forward"
          />
         </div>
        </div>
      )}
      {currentStep === 3 && (
        <div>
          <FourthStep/>
          <div className='btn-group'>
         <Button
            handleStepChange={handleStepChange}
            direction="backward"
          />
          <Button
            handleStepChange={handleStepChange}
            direction="forward"
          />
         </div>
        </div>
      )}
    </div>
    </>
  )
}

export default App
