import React from 'react';
import { Animated } from 'react-animated-css';
import EmailJS  from '@emailjs/browser';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import FormButton from '../form-button/formButton';
import './PopupForm.scss'

const PopupForm = ({show = false, onClose}) => {
  const handleClose = (e) => onClose && onClose(e)
  
  const sendEmail = (event) => {
    event.preventDefault();
    EmailJS.sendForm('service_r6scku4', 'template_t1pb6ii', event.target, 'lPljcRPKiLiq2FNUr' )
    .then(resp => console.log(resp))
    .catch(error => console.log(error))
  }
  return (<>
  <Animated animationIn="backInDown" animationOut="backOutUp" isVisible={true}>
      <div className={`popup-window d-flex ${show && 'show'}`}>
        <button className='x' onClick={handleClose}>X</button>
          <div className="popup-info">
              <h1>Contact Me</h1>
              <form onSubmit={sendEmail}>
                <div className="d-flex inputs">
                    <div className="label-input d-flex">
                      <label htmlFor="username1" className="block">Name</label>
                      <InputText autoComplete='off' name="user_name" placeholder='Enter your name here'/>
                    </div>
                    <div className="label-input d-flex">
                      <label htmlFor="username1" className="block">Email</label>
                      <InputText autoComplete='off' name="user_email"  placeholder='Enter your email address here'/>
                    </div>
                </div>
                <div className="text-area">
                    <div className="label-input d-flex">
                      <label htmlFor="username1" className="block">Message</label>
                      <InputTextarea placeholder='Your message here' name="user_message" />
                    </div>
                </div>
                <FormButton />
              </form>
          </div>
      </div>
 
      <div className={ show && "shadow"} onClick={handleClose}></div>
  </Animated>
    
  
  </>
  )
}

export default PopupForm
