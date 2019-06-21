import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import ListingForm from '../../components/ListingForm';
import { createListingStart } from '../../store/actions';
import { createValidator, email, required, draftRequired } from '../../services/validations';


const validate = createValidator({
    name: [required],
    email: [required, email],
    categoriesId: [required],
    address: [required],
    citiesId: [required],
    phone: [required],
    segmentation: [required],
    minPrice: [required],
    maxPrice: [required],
    mainImage: [required],
    website: [required],
    extraDescription: [draftRequired],
    description: [draftRequired],
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