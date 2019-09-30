import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import './registerForm.scss';
import customInputField from '../CustomFields';

const RegisterForm = (props) => {
  const {
    handleSubmit, registerStart, token, setNotLogined, setLogined,
  } = props;
  const onSubmitHandle = (formValues) => {
    registerStart(formValues);
  };

  if (token && token.token !== '') {
    setLogined(true);
    localStorage.setItem('token', token.token);
  } else {
    setNotLogined(false);
  }

  return (
    <div className="modal-sign-up">
      <div className="modal-form-wrapper">
        <form className="modal-form" onSubmit={handleSubmit(onSubmitHandle)}>
          <span className="modal-form__input-name">
            Электронный адрес
            <span className="modal-from__input-star">*</span>
          </span>
          <Field
            name="email"
            component={customInputField}
            type="text"
            className="modal-form__input"
          />
          <span className="modal-form__input-name">
            Логин
            <span className="modal-from__input-star">*</span>
          </span>
          <Field
            name="username"
            component={customInputField}
            type="text"
            className="modal-form__input"
          />
          <span className="modal-form__input-name">
            Пароль
            <span className="modal-from__input-star">*</span>
          </span>
          <Field
            name="password"
            component={customInputField}
            type="password"
            className="modal-form__input"
          />
          <button type="submit" className="modal-form__button">Зарегистрироваться</button>
        </form>
      </div>

    </div>
  );
};

RegisterForm.propTypes = {
  token: PropTypes.shape({
    token: PropTypes.string,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  registerStart: PropTypes.func.isRequired,
  setNotLogined: PropTypes.func.isRequired,
  setLogined: PropTypes.func.isRequired,
};

export default RegisterForm;
