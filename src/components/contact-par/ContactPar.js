import React from 'react';
import './ContactPar.scss';


const ContactPar = () => {
  return (
    <div className='contact-form'>
      <h1>Contact me</h1>
      <p className="form-par">This section is for you!! I'm looking for new opportunities and if you're 
        interested to colaborate with me you can let me know in this form. 
        <br />
        You can also let me suggestions how can I improve myself.
        <br />
        Thank you so much for checking my portfolio.  
      </p>
      {/* <form className='d-flex form-contact'> 
           <div className="name-email">
             <InputText
              className='input'
              id="name"
              type="text" 
              placeholder="Name" 
              maxlength={50} 
              name='user_name'
             />
             <InputText
              className='input'
              id="email"
              type="email"
               placeholder="Email" 
               maxlength={50} 
               name='user_email' 
             />
           </div>
           <InputText
             className='input'
             id="subject"  
             type="text" 
             placeholder="Subject"
             name='user_subject' 
           />
           <InputTextarea
             className='text-area'
             id="message"
             type="text"  
             placeholder="Message"
             name='user_message'
           />
           <FormButton />
         </form> */}
    </div>
  )
};



export default ContactPar;
