import { Fragment } from 'react';
import React from 'react'
import HeaderContainer from '../containers/Header';
import FooterContainer from '../containers/Footer'
import ArticlesContainer from '../containers/Articles'
import "../assets/styles/main.scss";

const Articles = () => {

  return (
    <Fragment>
      <HeaderContainer />
      <ArticlesContainer />
      <FooterContainer text="Footer"/>
    </Fragment>
  )
}

export default Articles;