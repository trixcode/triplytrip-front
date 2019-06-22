import { Fragment } from 'react';
import React from 'react'
import HeaderContainer from '../containers/Header';
import SuccessModal from '../components/SuccessModal';
import Footer from '../components/Footer';
import ArticlesContainer from '../containers/Articles'
import "../assets/styles/main.scss";

const Articles = () => {

  return (
    <Fragment>
      <HeaderContainer />
      <ArticlesContainer />
      <Footer text="Footer"/>
      <SuccessModal />
    </Fragment>
  )
}

export default Articles;