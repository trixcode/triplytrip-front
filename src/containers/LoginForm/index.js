import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import LoginForm from '../../components/LoginForm';
import { loginUserStart, setLogined, setNotLogined } from '../../store/actions';
import { createValidator, required } from '../../services/validations';


const validate = createValidator({
  username: [required],
  password: [required],
});
const formConfig = {
  form: 'LoginForm',
  validate,
};

const LoginFormContainer = props => <LoginForm {...props} />;

const mapStoreToProps = store => ({
  token: store.login.token,
  isLogined: store.main.isLogined,
});

const mapDispatchToProps = dispatch => ({
  loginUserStart: formValue => dispatch(loginUserStart(formValue)),
  setLogined: isLogined => dispatch(setLogined(isLogined)),
  setNotLogined: isLogined => dispatch(setNotLogined(isLogined)),
});
export default connect(mapStoreToProps, mapDispatchToProps)(reduxForm(formConfig)(LoginFormContainer));
