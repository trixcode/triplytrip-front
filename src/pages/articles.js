import { Fragment } from 'react';
import React from 'react'
import HeaderContainer from '../containers/Header';
import Footer from '../components/Footer';
import ArticlesWrapper from '../components/ArticlesWrapper'
import "../assets/styles/main.scss";

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