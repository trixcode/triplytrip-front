import { Fragment } from 'react'

import DiscoverContainer from '../src/containers/Discover';
import LatestNewsContainer from '../src/containers/LatestNews';

import Header from '../src/components/Header';
import HomeCategory from '../src/components/HomeCategory'
import Search from '../src/components/Search'
import PlacesContainer from '../src/containers/Places'
import Subscribe from '../src/components/Subscribe/Subscribe'
import TopContent from '../src/components/TopContent'
import UpcommingEventsContainer from '../src/containers/UpcommingEvents';
import Footer from '../src/components/Footer';
import "../src/assets/styles/main.scss";
import "../src/components/Header/header.scss";




function Home() {
  return (
    <Fragment>
      <div className="header-gradient-wrapper">
        <Header />
        <hr className="header-border" />
        <TopContent />
      </div>
      <HomeCategory />
      <hr className="category-border" />
      <Search />
      <DiscoverContainer />
      <PlacesContainer />
      <UpcommingEventsContainer />
      <LatestNewsContainer />
      <Subscribe />
      <Footer text="Footer"/>
    </Fragment>
  )
}

export default Home;
