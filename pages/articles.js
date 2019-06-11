import { Fragment } from 'react';

import HeaderContainer from '../src/containers/Header';
import Footer from '../src/components/Footer';
import ArticlesContainer from '../src/containers/Articles'
import "../src/assets/styles/main.scss";

const Articles = () => {

  return (
    <Fragment>
      <HeaderContainer />
      <ArticlesContainer />
      <Footer text="Footer"/>
    </Fragment>
  )
}

export default Articles;