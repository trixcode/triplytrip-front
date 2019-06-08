import React, { useState } from 'react';
import { Field } from 'redux-form'
import './registerForm.scss';
import { customInputField } from '../CustomFields';

const RegisterForm = (props) => {
  const { handleSubmit, createRegisterStart } = props;
  const onSubmitHandle = (formValues) => {
    console.log(formValues)
    createRegisterStart(formValues)
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
          <button className="modal-form__button">Зарегистрироваться</button>
        </form>
      </div>
      {/* <span className="modal-extra">
        <span className="modal-extra__account modal-extra--button">Already have an account?</span>
        <span className="modal-extra__sign-in modal-extra--button">Sign Up</span>
      </span> */}
    </div>
  )
}
export default RegisterForm;