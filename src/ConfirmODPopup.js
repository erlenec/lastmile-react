import React from "react";
import'./components/css/ODPopup.css';
 
const ConfirmODPopup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default ConfirmODPopup;