import { Fragment } from 'react';
import HeaderContainer from '../containers/Header';
import SuccessModal from '../components/SuccessModal';
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
        <SuccessModal />
    </Fragment>
  )
}

export default PlacesCategory;