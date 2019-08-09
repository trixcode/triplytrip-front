import React, { Fragment } from 'react';
import HeaderContainer from '../containers/Header';
import FooterContainer from '../containers/Footer';
import ArticlesContainer from '../containers/Articles';
import '../assets/styles/main.scss';

const Articles = () => (
  <Fragment>
    <HeaderContainer />
    <ArticlesContainer />
    <FooterContainer text="Footer" />
  </Fragment>
);

export default Articles;
