import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { createSubscribesStart } from '../../store/actions';
import { createValidator, email, required } from '../../services/validations';
import SubscribeArticles from '../../components/SubscribeArticles';


const validate = createValidator({
  email: [required, email],
});
const formConfig = {
  form: 'SubscribeArticles',
  validate,
};

const SubscribeArticlesContainer = props => <SubscribeArticles {...props} />;
const mapDispatchToProps = dispatch => ({
  createSubscribesStart: formValues => dispatch(createSubscribesStart(formValues)),
});
export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(SubscribeArticlesContainer));
