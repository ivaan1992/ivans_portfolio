import React, { useEffect, useState } from 'react';
import EmailJS  from '@emailjs/browser';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import FormButton from '../form-button/formButton';
import { toast, ToastContainer } from 'react-toastify';

const Form = () => {
  
  const notify = () => toast("Thanks for your message", 
  {
    position: "top-right",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const initialValues = { user_name: '', user_email: '', user_message: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit ] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if(!formErrors.user_name && !formErrors.user_email && !formErrors.user_message) {
      sendEmail(e);
    }
  }

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.user_name) {
      errors.user_name = "Your name is required!"
    } else if(values.user_name.length < 3) {
      errors.user_name = "Your name should contain at least 3 characters!"
    }
    if(!values.user_email) {
      errors.user_email = "Your email is required!"
    } else if (!regex.test(values.user_email)) {
      errors.user_email = "This is not a valid email format!";
    }
    if(!values.user_message) {
      errors.user_message = "Message is required!";
    } else if(values.user_message.length < 10) {
      errors.user_message = "Your message must contain at least 10 characters"
    } else if(values.user_message.length > 1000) {
      errors.user_message = "Your message cannot exceed 1000 characters"
    } 
    return errors;
  }




  const sendEmail = (event) => { 
    event.preventDefault();
    event.target.reset();
    EmailJS.sendForm('service_r6scku4', 'template_t1pb6ii', event.target, 'lPljcRPKiLiq2FNUr' )
    .then(resp => {
      notify(resp);
    })
    .catch(error => console.log(error))
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="d-flex inputs">
          
           <div className="label-input d-flex">
             
             <label htmlFor="username1" className="block">Name</label>
             <InputText autoComplete='off'
               type="text"
               name="user_name" 
               placeholder='Enter your name here'
               value={formValues.user_name}
               onChange={handleChange}
             />
             <p className='text-errors'><small>{formErrors.user_name}</small></p>
           </div>
           
           <div className="label-input d-flex">
             
             <label htmlFor="username1" className="block">Email</label>
             <InputText autoComplete='off'
               type="email"
               name="user_email" 
               placeholder='Enter your email address here'
               value={formValues.user_email}
               onChange={handleChange}
             />
             <p className='text-errors'><small>{formErrors.user_email}</small></p>
           </div>
        </div>
        <div className="text-area">
            
            <div className="label-input d-flex">
              <label htmlFor="username1" className="block">Message</label>
              <InputTextarea placeholder='Your message here'
                type="text"
                name="user_message"
                minLength={10}
                maxLength={1000}
                value={formValues.user_message}
               onChange={handleChange}
              />
              <p className='text-errors'><small>{formErrors.user_message}</small></p>
            </div>
        </div>
        <FormButton />
      </form>
      <ToastContainer />
    </div>
  )
}

export default Form;
