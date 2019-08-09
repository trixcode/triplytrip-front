import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import PlaceDetailContactForm from '../../components/PlaceDetailContactForm';
import { getPlaceDetailByIdStart } from '../../store/actions';
import { createValidator, email, required } from '../../services/validations';


const validate = createValidator({
  name: [required],
  email: [required, email],
  subject: [required],
  message: [required],
});
const formConfig = {
  form: 'PlaceDetailContactForm',
  validate,
};

const PlaceDetailContactFormContainer = props => <PlaceDetailContactForm {...props} />;
const mapDispatchToProps = dispatch => ({
  getPlaceDetailByIdStart: placeId => dispatch(getPlaceDetailByIdStart(placeId)),
});
export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(PlaceDetailContactFormContainer));
