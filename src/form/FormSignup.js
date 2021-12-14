import React from 'react';
import './Form.css';
import useForm from './useForm';
import validate from './validateInfo';

const FormSignup = ({submitForm}) =>{
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
  return(
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Use this form to create your account.</h1>
        <div className="form-inputs">
          <lable className="form-lable" htmlFor="username">
            Username
          </lable>
          <input
          id="username"
          type="text"
          name="username"
          className="form-input"
          placeholder="Enter your username"
          value={values.username}
          onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <lable className="form-lable" htmlFor="email">
            Email
          </lable>
          <input
          id="email"
          type="email"
          name="email"
          className="form-input"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <lable className="form-lable" htmlFor="password">
            Password
          </lable>
          <input
          id="password"
          type="password"
          name="password"
          className="form-input"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <lable className="form-lable" htmlFor="re_password">
            Confirm Password
          </lable>
          <input
          id="re_password"
          type="password"
          name="re_password"
          className="form-input"
          placeholder="Re-enter password"
          value={values.re_password}
          onChange={handleChange}
          />
          {errors.re_password && <p>{errors.re_password}</p>}
        </div>
        <button className="form-input-btn" type="submit">Sign in</button>
        <span className="form-input-login">Already have an account? Login <a href="#">here</a></span>
      </form>
    </div>
  )
}
export default FormSignup
