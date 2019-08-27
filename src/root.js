import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HomePage from './pages/HomePage';
import addListing from './pages/addListing';
import articles from './pages/articles';
import placesCategory from './pages/placesCategory';
import detail from './pages/dynamic/detail';
import article from './pages/dynamic/article';
import { setLogined } from './store/actions';

const mapStateToProps = store => ({
  isLogined: store.main.isLogined,
});
const mapDispatchToProps = dispatch => ({
  setLogined: isLogined => dispatch(setLogined(isLogined)),
});

const isAuth = () => {
  const token = localStorage.getItem('token');
  if (token === null) {
    return setLogined(false).isLogined;
  }
  return setLogined(true).isLogined;
};

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (isAuth() ? (
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

function AppRouter() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <PrivateRoute path="/addListing" component={addListing} />
      <Route path="/articles" component={articles} />
      <Route path="/placesCategory" component={placesCategory} />
      <Route path="/detail/:placeId" component={detail} />
      <Route path="/article/:articleId" component={article} />
    </BrowserRouter>
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
