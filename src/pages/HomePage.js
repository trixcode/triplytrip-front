import React, { Fragment } from 'react';

import DiscoverContainer from '../containers/Discover';
import LatestNewsContainer from '../containers/LatestNews';

import HeaderContainer from '../containers/Header';
import HomeCategory from '../components/HomeCategory';
import SearchContainer from '../containers/Search';
import PlacesContainer from '../containers/Places';
import Subscribe from '../components/Subscribe/index';
import TopContent from '../components/TopContent';
import UpcommingEventsContainer from '../containers/UpcommingEvents';
import FooterContainer from '../containers/Footer';

import '../assets/styles/main.scss';
import '../components/Header/header.scss';


function Home() {
  return (
    <Fragment>
      <HeaderContainer />
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
      <FooterContainer text="Footer" />
    </Fragment>
  );
}

export default Home;
