import { Fragment } from 'react'

import DiscoverContainer from '../src/containers/Discover';
import LatestNewsContainer from '../src/containers/LatestNews';

import Header from '../src/components/Header';
import HomeCategory from '../src/components/HomeCategory'
import SearchContainer from '../src/containers/Search'
import PlacesContainer from '../src/containers/Places'
import Subscribe from '../src/components/Subscribe/index'
import TopContent from '../src/components/TopContent'
import UpcommingEventsContainer from '../src/containers/UpcommingEvents';
import Footer from '../src/components/Footer';

import "../src/assets/styles/main.scss";
import "../src/components/Header/header.scss";




function Home() {
  return (
    <Fragment>
      <Header />
      <div className="header-gradient-wrapper">
        <hr className="header-border" />
        <TopContent />
      </div>

      <HomeCategory />
      <hr className="category-border" />
      <SearchContainer />
      <DiscoverContainer />
      <PlacesContainer />
      <UpcommingEventsContainer />
      <LatestNewsContainer />
      <Subscribe />
      <Footer text="Footer" />
    </Fragment>
  )
}

export default Home;
