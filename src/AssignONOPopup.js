import React, { useState } from 'react';
import ODPopup from './ConfirmODPopup';
import'./components/css/AssignONOPopup.css';
//import Postalform from './Postalform';
 
 
function AssignONOPopup() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  
  return <>
    <input class = "assignono-button"
      type="button"
      value="Start Collection"
      onClick={togglePopup}
    />
    {isOpen && <ODPopup
      content={<>
        ONO number: 123
       
      </>}
      handleClose={togglePopup}
    />}
  </>
}
 
export default AssignONOPopup;