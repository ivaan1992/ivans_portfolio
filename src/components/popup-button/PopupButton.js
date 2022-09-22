import React from 'react';
import './PopupButton.scss';

const PopupButton = ({onClick}) => (
  
  <div className='popup-button'>
    <button type='button' onClick={(e) => onClick && onClick(e)}>
      <i className="pi pi-envelope"></i>
    </button>
  </div>
)


export default PopupButton;
