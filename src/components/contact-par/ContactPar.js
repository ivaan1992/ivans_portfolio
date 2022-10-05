import React from 'react';
import SocialMedia from '../../components/social-media/SocialMedia'
import './ContactPar.scss';


const ContactPar = () => {
  return (
    <div className='contact-form d-flex'>
      <div class="text">
        <h1>Contact me</h1>
        <p className="form-par">This section is for you!! I'm looking for new job opportunities and if you're 
          interested to colaborate with me you can contact me in the next form, you only have to click on the email button.  
          <br />
          Also, You can let me suggestions about how can I improve myself. And finally you can check some of my social media!
          <br /> 
          Thank you so much for checking my portfolio.  
        </p>
        <div class="social-media d-flex">
          <SocialMedia />
        </div>
      </div>
      
    </div>
  )
};



export default ContactPar;
