import React from 'react';
import '../home-button/homeButton.scss'
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';


const homeButton = () => (
  <div className='homeButton d-flex'>
    <Link to="/about">
      <Button 
        label="Let's go" 
        className="p-button-secondary"
        icon="pi pi-arrow-circle-right" iconPos="right" />
    </Link>
  </div>
);

export default homeButton;