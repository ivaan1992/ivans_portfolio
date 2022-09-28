import React from 'react';
import Form from '../form/Form';
import 'animate.css';
import './PopupForm.scss'

const PopupWindow = ({show = false, onClose}) => {
  const handleClose = (e) => onClose && onClose(e)

  return (<>
      <div className={`popup-window d-flex animate__animated animate__backInDown ${show ? "show" : ""} ` } >

          <div className="popup-info">
              <button className='x'onClick={handleClose}>X</button>
          </div>

          <h1>Contact Me</h1>
          <div>
            <Form />
          </div>
          
      </div>
 
      <div className= {show ? "shadow" : ""} onClick={handleClose}></div>
    
  
  </>
  )
}

export default PopupWindow;
