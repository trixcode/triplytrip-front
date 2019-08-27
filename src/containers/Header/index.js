import React from 'react';
import { connect } from 'react-redux';

import {
  getCategoriesStart, getCitiesStart, setLogined, setNotLogined,
} from '../../store/actions';
import Header from '../../components/Header';

const HeaderContainer = props => <Header {...props} />;

const mapStateToProps = store => ({
  categories: store.main.categories,
  cities: store.main.cities,
  isLogined: store.main.isLogined,
});

const mapDispatchToProps = dispatch => ({
  getCategoriesStart: (requestParams = '') => dispatch(getCategoriesStart(requestParams)),
  getCitiesStart: (requestParams = '') => dispatch(getCitiesStart(requestParams)),
  setLogined: isLogined => dispatch(setLogined(isLogined)),
  setNotLogined: isLogined => dispatch(setNotLogined(isLogined)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
