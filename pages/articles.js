import { Fragment } from 'react';

import HeaderContainer from '../src/containers/Header';
import Footer from '../src/components/Footer';
import ArticlesWrapper from '../src/components/ArticlesWrapper'
import "../src/assets/styles/main.scss";

const Articles = () => {

  return (
    <Fragment>
      <HeaderContainer />
      <ArticlesWrapper />
      <Footer text="Footer"/>
    </Fragment>
  )
}

export default Articles;