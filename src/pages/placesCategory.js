import { Fragment } from 'react';
import HeaderContainer from '../containers/Header';
import PagesTopTitle from '../components/PagesTopTitle';
import PlacesFilterFormContainer from '../containers/PlacesFilterForm';
import Footer from '../components/Footer';
import "../assets/styles/main.scss";
import React from 'react'

const PlacesCategory = () => {
  return (
    <Fragment>
      <HeaderContainer />
      <PlacesFilterFormContainer />
        <Footer text="Footer"/>
    </Fragment>
  )
}

export default PlacesCategory;