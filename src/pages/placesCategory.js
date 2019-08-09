import React, { Fragment } from 'react';
import HeaderContainer from '../containers/Header';
import PlacesFilterFormContainer from '../containers/PlacesFilterForm';
import FooterContainer from '../containers/Footer';
import '../assets/styles/main.scss';

const PlacesCategory = () => (
  <Fragment>
    <HeaderContainer />
    <PlacesFilterFormContainer />
    <FooterContainer text="Footer" />
  </Fragment>
);

export default PlacesCategory;
