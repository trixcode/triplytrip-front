import { Fragment } from 'react'

import Header from '../src/components/Header';
import TopContent from '../src/components/TopContent'


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

      </Fragment> 
    )
  }
  
  export default Home;