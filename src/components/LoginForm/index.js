import React, { useState } from 'react';
import { Field } from 'redux-form'
import { customInputField } from '../CustomFields';

// import './registerForm.scss';


const LoginForm = (props) => {
  const {  handleSubmit, createLoginStart } = props;
  const onSubmitHandle = (formValues) => {
    console.log(formValues)
    createLoginStart(formValues)
  }
  return (
    <div className="modal-sign-in">
      <div className="modal-form-wrapper">
        <form className="modal-form" onSubmit={handleSubmit(onSubmitHandle)}>
          <span className="modal-form__input-name">Электронный адрес<span className="modal-from__input-star">*</span></span>
          <Field name="email"
          component={customInputField}
          type="text"
          className='modal-form__input'
          />
          <span className="modal-form__input-name">Логин<span className="modal-from__input-star">*</span></span>
          <Field name="name"
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
          <button className="modal-form__button">Войти</button>
        </form>

      </div>
      <span className="modal-extra">
        <span className="modal-extra__account modal-extra--button">У вас уже есть аккаут?</span>
        <span className="modal-extra__sign-in modal-extra--button">Регистрация</span>
      </span>
    </div>
  )
}
export default LoginForm;