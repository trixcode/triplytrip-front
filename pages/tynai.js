import { Fragment } from 'react'
import Header from '../src/components/Header';
import Photo from '../src/components/Photo';

import "../src/assets/styles/main.scss";
import "../src/components/Header/header.scss";

function Tynai() {
  return (
    <Fragment>
      <div className="header-gradient-wrapper">
        <Header />
        <hr
          className="header-border" />
      </div>
      <Photo /> 
    </Fragment>
  )
}

export default Tynai;
