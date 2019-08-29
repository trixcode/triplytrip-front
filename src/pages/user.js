import React, { Fragment } from 'react';
import HeaderContainer from '../containers/Header';
import FooterContainer from '../containers/Footer';
import UserForm from '../components/UserForm';
import '../assets/styles/main.scss';

const User = () => (
  <Fragment>
    <HeaderContainer />
    <UserForm />
    <FooterContainer text="Footer" />
  </Fragment>
);

export default User;
