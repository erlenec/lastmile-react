import React, { useState } from 'react';
import ODPopup from './ConfirmODPopup';
import'./components/css/ODPopup.css';
import Postalform from './Postalform';
 
 
function Popup() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  
  return <div>
    <input class = "ondemand-button"
      type="button"
      value="On-Demand Collection"
      onClick={togglePopup}
    />
    <p>hi</p>
    {isOpen && <ODPopup
      content={<>
        <Postalform/>
       
      </>}
      handleClose={togglePopup}
    />}
  </div>
}
 
export default Popup;