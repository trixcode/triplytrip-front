import { Fragment } from 'react';

import HeaderContainer from '../containers/Header';
import Footer from '../components/Footer';
import ListingFormContainer from '../containers/ListingForm';
import PagesTopTitle from '../components/PagesTopTitle';
import React from 'react'


import "../assets/styles/main.scss";

const AddListing = () => {

  return (
    <Fragment>
      <HeaderContainer />
      <PagesTopTitle 
        title='Add Listing'
        link={['HOME', 'add listing']}/>
      <ListingFormContainer />
      <Footer text="Footer"/>
    </Fragment>
  )
}

export default AddListing;