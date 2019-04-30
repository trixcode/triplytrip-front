import { Fragment } from 'react'
import Header from '../src/components/Header';
import Places from '../src/components/PlaceCard/Places'
import Subscribe from '../src/components/Subscribe/Subscribe'
import TopContent from '../src/components/TopContent'
import UpcommingEvents from '../src/components/UpcommingEvents';
import Discover from '../src/components/Discover';
import Articles from '../src/components/Articles';
import "../src/assets/styles/main.scss";
import "../src/components/Header/header.scss";

function Home() {
  return (
    <Fragment>
      <div className="header-gradient-wrapper">
        <Header />
        <hr
          className="header-border" />
        <TopContent />
      </div>
      <Discover />
      <Places />
      <UpcommingEvents />
      <Articles />
      <Subscribe />
    </Fragment>
  )
}

export default Home;
