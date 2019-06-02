import { Fragment } from 'react';
import HeaderContainer from '../src/containers/Header';
import PagesTopTitle from '../src/components/PagesTopTitle';
import PlacesFilterFormContainer from '../src/containers/PlacesFilterForm';
import PlacesFilterResult from '../src/components/PlacesFilterResult';
import Footer from '../src/components/Footer';
import "../src/assets/styles/main.scss";


const PlacesCategory = () => {
  return (
    <Fragment>
      <HeaderContainer />
      <PagesTopTitle 
        title='London'
        link={['HOME', 'category', 'bishkek']}/>
      <PlacesFilterFormContainer />
        <Footer text="Footer"/>
    </Fragment>
  )
}

export default PlacesCategory;