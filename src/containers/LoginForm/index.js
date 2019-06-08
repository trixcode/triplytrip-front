import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import LoginForm from '../../components/LoginForm';
import { createLoginStart } from '../../store/actions';
import { createValidator, email, required } from '../../services/validations';


const validate = createValidator({
    name: [required],
    email: [required, email],
    password: [required],
});
const formConfig = {
    form: 'LoginForm',
    validate
}

const LoginFormContainer = (props) => <LoginForm {...props} />;
const mapDispatchToProps = (dispatch) => ({
    createLoginStart: (formValues) => dispatch(createLoginStart(formValues))
}) 
export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(LoginFormContainer));