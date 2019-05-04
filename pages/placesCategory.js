import { Fragment } from 'react';
import Header from '../src/components/Header';
import PagesTopTitle from '../src/components/PagesTopTitle'
import FilterForm from '../src/components/FilterForm';
import "../src/assets/styles/main.scss";

import hotels from '../src/components/Places/hotels.json';

const PlacesCategory = () => {
  const placesArr = hotels.hotels
  return (
    <Fragment>
      <div className="header-gradient-wrapper">
        <Header />
      </div>
      <PagesTopTitle/>
      <FilterForm 
        places={placesArr} />
    </Fragment>
  )
}

export default PlacesCategory;