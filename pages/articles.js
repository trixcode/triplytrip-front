import { Fragment } from 'react';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Article from '../src/components/Article'
import "../src/assets/styles/main.scss";

const Articles = () => {

  return (
    <Fragment>
      <Header />
      <Article /> 

      <Footer text="Footer"/>
    </Fragment>
  )
}

export default Articles;