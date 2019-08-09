import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, change, formValueSelector } from 'redux-form';
import { withRouter } from 'react-router';

import PlacesFilterForm from '../../components/PlacesFilterForm';
import { getPlacesStart } from '../../store/actions';

const formConfig = {
  form: 'PlacesFilterForm',
};
const selector = formValueSelector('PlacesFilterForm');

const mapStateToProps = store => ({
  places: store.places,
  cities: store.main.cities,
  categories: store.main.categories,
  myValues: selector(store, 'keywords', 'location', 'categoriesForm'),
});
const mapDispatchToProps = dispatch => ({
  changeFormValue: (field, value) => dispatch(change('PlacesFilterForm', field, value)),
  getPlacesStart: (requestParams = '') => dispatch(getPlacesStart(requestParams)),
});
const PlacesFilterFormContainer = props => <PlacesFilterForm {...props} />;
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(formConfig)(withRouter(PlacesFilterFormContainer)));
