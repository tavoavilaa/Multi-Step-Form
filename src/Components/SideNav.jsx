import React, { useState } from 'react';
import useInputs from '../hooks/useInputs'
import '../App.css'

const SideNav = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
      setIsActive(!isActive);
    };


  const {summaryData} = useInputs()

  return (
    <>
    <div className={isActive ? 'side-nav active' : 'side-nav hide'}>
        <h2><b>Resumen</b></h2>
        <div className='summary'>
        {Object.entries(summaryData).map(([key, value]) => (
          <div key={key} className='summaryContent'>
            <h4 >
              <strong>{key}: </strong>
            </h4>
            <p>
            {value}
            </p>
          </div>
        ))}
      </div>
    </div>
    <button className='burger' onClick={toggleClass}>
        <div id="nav-icon3" className={isActive ? 'open' : ''}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </button>
    </>
  );
};

export default SideNav;
