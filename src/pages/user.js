import React, { Fragment } from 'react';
import HeaderContainer from '../containers/Header';
import FooterContainer from '../containers/Footer';
import UserContainer from '../containers/User';
import '../assets/styles/main.scss';

const User = () => (
  <Fragment>
    <HeaderContainer />
    <UserContainer />
    <FooterContainer text="Footer" />
  </Fragment>
);

export default User;
