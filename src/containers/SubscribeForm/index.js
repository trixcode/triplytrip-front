import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import SubscribeForm from '../../components/SubscribeForm';
import { createSubscribesStart } from '../../store/actions';
import { createValidator, email, required } from '../../services/validations';


const validate = createValidator({
    name: [required],
    email: [required, email],
});
const formConfig = {
    form: 'SubscribeForm',
    validate
}

const SubscribeFormContainer = (props) => <SubscribeForm {...props} />;
const mapDispatchToProps = (dispatch) => ({
    createSubscribesStart: (formValues) => dispatch(createSubscribesStart(formValues))
}) 
export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(SubscribeFormContainer));