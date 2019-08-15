import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import ListingForm from '../../components/ListingForm';
import { createListingStart } from '../../store/actions';
import { createValidator, email, required } from '../../services/validations';


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

});
const formConfig = {
  form: 'ListingForm',
  validate,
};

const ListingFormContainer = props => <ListingForm {...props} />;

const mapStateToProps = store => ({
  categories: store.main.categories,
  cities: store.main.cities,
});

const mapDispatchToProps = dispatch => ({
  createListingStart: formValues => dispatch(createListingStart(formValues)),
});
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(formConfig)(ListingFormContainer));
