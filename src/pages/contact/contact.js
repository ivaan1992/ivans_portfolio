import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import './contact.scss';
import ContactPar from '../../components/contact-par/ContactPar';
import PopupWindow from '../../components/popup-window/PopupWindow';
import PopupButton from '../../components/popup-button/PopupButton';


const Contact = () => {
  const [show, setShow] = useState(false);
  
  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className='d-flex form'>
        <ContactPar />
        <PopupButton onClick={() => setShow(true)}/>
        <PopupWindow show={show} onClose={() => setShow(false)}/>

      </div>
    </div>
  );
}

export default Contact
