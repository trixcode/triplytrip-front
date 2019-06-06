import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import {getCategoriesStart, getCitiesStart} from '../../store/actions';
import Search from '../../components/Search';

const SearchContainer = (props) => <Search {...props} />;

const formConfig = {
  form: 'Search',
}

const mapStateToProps = (store) => ({
    categories: store.main.categories,
    cities: store.main.cities
})
  
const mapDispatchToProps = (dispatch) => ({
  getCategoriesStart: (requestParams='') => dispatch(getCategoriesStart(requestParams)),
  getCitiesStart: (requestParams='') => dispatch(getCitiesStart(requestParams))
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(formConfig)(SearchContainer))