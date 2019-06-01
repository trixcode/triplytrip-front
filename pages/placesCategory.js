import { Fragment } from 'react';
import Header from '../src/components/Header';
import PagesTopTitle from '../src/components/PagesTopTitle';
import PlacesFilterFormContainer from '../src/containers/PlacesFilterForm';
import PlacesFilterResult from '../src/components/PlacesFilterResult';
import Footer from '../src/components/Footer';
import "../src/assets/styles/main.scss";

import hotels from '../src/components/Places/hotels.json';

const PlacesCategory = () => {
  const placesArr = hotels.hotels
  return (
    <Fragment>
      <Header />
      <PagesTopTitle 
        title='London'
        link={['HOME', 'category', 'bishkek']}/>
      <PlacesFilterFormContainer />
      <PlacesFilterResult places={placesArr} />
        <Footer text="Footer"/>
    </Fragment>
  )
}

export default PlacesCategory;