import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import RegisterForm from '../../components/RegisterForm';
import { createValidator, email, required } from '../../services/validations';
import { registerStart, setLogined, setNotLogined } from '../../store/actions';


const validate = createValidator({
  name: [required],
  email: [required, email],
  password: [required],
});
const formConfig = {
  form: 'RegisterForm',
  validate,
};

const RegisterFormContainer = props => <RegisterForm {...props} />;

const mapStateToProps = store => ({
  token: store.register.token,
});

const mapDispatchToProps = dispatch => ({
  registerStart: formValue => dispatch(registerStart(formValue)),
  setLogined: isLogined => dispatch(setLogined(isLogined)),
  setNotLogined: isLogined => dispatch(setNotLogined(isLogined)),
});
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(formConfig)(RegisterFormContainer));
