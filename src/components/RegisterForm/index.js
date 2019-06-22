import React, { useState } from 'react';
import { Field } from 'redux-form'
import './registerForm.scss';
import { customInputField } from '../CustomFields';

const RegisterForm = (props) => {
  const { handleSubmit, registerStart, userData, setNotLogined, setLogined } = props;
  const onSubmitHandle = (formValues) => {
    registerStart(formValues)
  }
  console.log(userData)

  if (userData !== null) {
    setLogined()
    localStorage.setItem('token', userData.token)
  } else {
    setNotLogined()
  }
  
  return (
    <div className="modal-sign-up">
      <div className="modal-form-wrapper">
        <form className="modal-form" onSubmit={handleSubmit(onSubmitHandle)}>
          <span className="modal-form__input-name">Электронный адрес<span className="modal-from__input-star">*</span></span>
          <Field name="email"
            component={customInputField}
            type="text"
            className='modal-form__input'
          />
          <span className="modal-form__input-name">Логин<span className="modal-from__input-star">*</span></span>
          <Field name="username"
            component={customInputField}
            type="text"
            className='modal-form__input'
          />
          <span className="modal-form__input-name">Пароль<span className="modal-from__input-star">*</span></span>
          <Field name="password"
            component={customInputField}
            type="password"
            className='modal-form__input'
          />
          <button className="modal-form__button">Зарегистрироваться</button>
        </form>
      </div>
      
    </div>
  )
}
export default RegisterForm;