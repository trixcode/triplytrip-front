import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import ListingForm from '../../components/ListingForm';
import { createListingStart } from '../../store/actions';
import { createValidator, email, required, phone, integer } from '../../services/validations';


const validate = createValidator({
    name: [required],
    email: [required, email],
    categoriesId: [required],
    address: [required],
    citiesId: [required],
    phone: [required, phone],
});
const formConfig = {
    form: 'ListingForm',
    validate
}

const ListingFormContainer = (props) => <ListingForm {...props} />;
const mapDispatchToProps = (dispatch) => ({
    createListingStart: (formValues) => dispatch(createListingStart(formValues))
}) 
export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(ListingFormContainer));