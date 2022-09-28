import React from 'react';
import { Button } from 'primereact/button';

const SocialMedia = () => {
  return (
    <div className='social-buttons'>
      <a href="https://www.linkedin.com/in/ivan-linares-gaona/">
        <Button icon="pi pi-linkedin" className="p-button-rounded p-button-secondary p-button-outlined" aria-label="Notification" />
      </a>
      <a href="https://github.com/ivaan1992">
        <Button icon="pi pi-github" className="p-button-rounded p-button-secondary p-button-outlined" aria-label="Notification" />
      </a>
      <a href="https://twitter.com/ivangaona92">
        <Button LinkTo="" icon="pi pi-twitter" className="p-button-rounded p-button-secondary p-button-outlined" aria-label="Notification" />
      </a>

      
    </div>
  )
}

export default SocialMedia
