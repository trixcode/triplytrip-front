import React from 'react';
import { connect } from 'react-redux';

import {getCategoriesStart, getCitiesStart, setLogined, setNotLogined} from '../../store/actions';
import Header from '../../components/Header'

const HeaderContainer = (props) => <Header {...props} />

const mapStateToProps = (store) => ({
    categories: store.main.categories,
    cities: store.main.cities,
})
  
const mapDispatchToProps = (dispatch) => ({
  getCategoriesStart: (requestParams='') => dispatch(getCategoriesStart(requestParams)),
  getCitiesStart: (requestParams='') => dispatch(getCitiesStart(requestParams)),
  setLogined: (isLogined) => dispatch(setLogined(true)),
  setNotLogined: (isLogined) => dispatch(setNotLogined(false))
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)