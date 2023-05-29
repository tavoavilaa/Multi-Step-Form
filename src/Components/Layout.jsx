import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom'
import SideNav from './SideNav'
import Modal from './Modal'
import Stepper from 'react-stepper-horizontal';

import '../app.css'
import '../index.css'

const Layout = () => {
  const [currentStep, setCurrentStep] = useState(0);


  const steps = [
    { title: 'Mis datos' },
    { title: 'Mi apartamento' },
    { title: 'Características exteriores' },
    { title: 'Resumen' },
  ];

  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    
    if (pathname === '/datos-cliente') {
      setCurrentStep(0);
    } else if (pathname === '/direccion-apartamento') {
      setCurrentStep(1);
    } else if (pathname === '/caracteristicas') {
      setCurrentStep(2);
    } else if (pathname === '/resumen') {
      setCurrentStep(3);
    }
  }, [location.pathname]);


  return (
    <>
        <figure>
          <img className='logo' src="https://media.licdn.com/dms/image/C4E0BAQE4HomB7pyoVg/company-logo_200_200/0/1652362724583?e=1693440000&v=beta&t=tOnjg5n0yh8u9i4V7GK1dACpukhBUKun_tpTYfDHtW8" alt="habi" />
        </figure>
        {location.pathname != '/resumen' ? <SideNav/> : null}
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
      />
      <div className="main-card">
        <Outlet/>
      </div>
      {location.pathname != '/resumen' ? <Modal/> : null}
          
    </>
  )
}

export default Layout