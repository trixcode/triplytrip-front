import { Fragment } from 'react';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import ArticlesWrapper from '../src/components/ArticlesWrapper'
import "../src/assets/styles/main.scss";

const Articles = () => {

  return (
    <Fragment>
      <Header />
      <ArticlesWrapper />
      <Footer text="Footer"/>
    </Fragment>
  )
}

export default Articles;