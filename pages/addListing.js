import { Fragment } from 'react';

import HeaderContainer from '../src/containers/Header';
import Footer from '../src/components/Footer';
import ListingForm from '../src/components/ListingForm';
import PagesTopTitle from '../src/components/PagesTopTitle';



import "../src/assets/styles/main.scss";

const AddListing = () => {

  return (
    <Fragment>
      <HeaderContainer />
      <PagesTopTitle 
        title='Add Listing'
        link={['HOME', 'add listing']}/>
      <ListingForm />
      <Footer text="Footer"/>
    </Fragment>
  )
}

export default AddListing;