import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import RegisterForm from '../../components/RegisterForm';
import { createRegisterStart } from '../../store/actions';
import { createValidator, email, required } from '../../services/validations';


const validate = createValidator({
    name: [required],
    email: [required, email],
    password: [required],
});
const formConfig = {
    form: 'RegisterForm',
    validate
}

const RegisterFormContainer = (props) => <RegisterForm {...props} />;
const mapDispatchToProps = (dispatch) => ({
    createRegisterStart: (formValues) => dispatch(createRegisterStart(formValues))
}) 
export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(RegisterFormContainer));