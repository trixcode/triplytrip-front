import React, { Fragment } from 'react';
import HeaderContainer from '../containers/Header';
import FooterContainer from '../containers/Footer';
import ListingFormContainer from '../containers/ListingForm';
import PagesTopTitle from '../components/PagesTopTitle';


import '../assets/styles/main.scss';

const AddListing = () => (
  <Fragment>
    <HeaderContainer />
    <PagesTopTitle
      title="Add Listing"
      link={['HOME', 'add listing']}
    />
    <ListingFormContainer />
    <FooterContainer text="Footer" />
  </Fragment>
);

export default AddListing;
