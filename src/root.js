import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HomePage from './pages/HomePage';
import AddListing from './pages/addListing';
import Articles from './pages/articles';
import PlacesCategory from './pages/placesCategory';
import Detail from './pages/dynamic/detail';
import Article from './pages/dynamic/article';
import User from './pages/user';

function PrivateRouter({ isLogined, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (isLogined ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
          }}
        />
      ))
      }
    />
  );
}


export function AppRouter() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/articles" component={Articles} />
      <Route path="/placesCategory" component={PlacesCategory} />
      <Route path="/detail/:placeId" component={Detail} />
      <Route path="/article/:articleId" component={Article} />
      <PrivateRoute path="/addListing" component={AddListing} />
      <PrivateRoute path="/user" component={User} />
    </BrowserRouter>
  );
}


const mapStateToProps = store => ({
  isLogined: store.user.isLogined,
});

PrivateRouter.propTypes = {
  isLogined: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export const PrivateRoute = connect(mapStateToProps, null)(PrivateRouter);
