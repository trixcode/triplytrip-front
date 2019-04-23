import { Fragment } from 'react'

import Header from '../src/components/Header';
import TopContent from '../src/components/TopContent'

import "../src/assets/styles/main.scss";

function Home() {
    return (
      <Fragment>
        <div className="GradientWrapper">
          <Header />
          <hr className="headerBorder" />
          <TopContent />
        </div>
      </Fragment> 
    )
  }
  
  export default Home;