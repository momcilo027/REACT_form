import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () =>{
  const[isSubmitted, setIsSubmitted] = useState(false)
  function submitForm(){
    setIsSubmitted(true);
  }
  return(
    <>
    <div className="form-container">
      <span className="close-btn">X</span>
      <div>
        <img className="form-img" src="logo512.png" alt="spaceship" />
      </div>
      {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
    </div>
    </>
  )
}
export default Form
