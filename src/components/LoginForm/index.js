import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import customInputField from '../CustomFields';


const LoginForm = (props) => {
  const {
    handleSubmit, loginUserStart, token, setNotLogined, setLogined,
  } = props;
  const onSubmitHandle = (formValues) => {
    loginUserStart(formValues);
  };

  if (token && token.token !== '') {
    setLogined(true);
    localStorage.setItem('token', token.token);
  } else {
    setNotLogined(false);
  }
  console.log('object', token);
  console.log('string', token.token);

  return (
    <div className="modal-sign-in">
      <div className="modal-form-wrapper">
        <form className="modal-form" onSubmit={handleSubmit(onSubmitHandle)}>
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
          <button type="submit" className="modal-form__button">Войти</button>
        </form>

      </div>
    </div>
  );
};

LoginForm.propTypes = {
  token: PropTypes.shape({
    token: PropTypes.string,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loginUserStart: PropTypes.func.isRequired,
  setNotLogined: PropTypes.func.isRequired,
  setLogined: PropTypes.func.isRequired,
};

export default LoginForm;
