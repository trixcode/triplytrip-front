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
import user from './pages/user';

function AppRouter(props) {
  const { isLogined } = props;

  function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={() => (isLogined ? (
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

  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/articles" component={articles} />
      <Route path="/placesCategory" component={placesCategory} />
      <Route path="/detail/:placeId" component={detail} />
      <Route path="/article/:articleId" component={article} />
      <PrivateRoute path="/addListing" component={addListing} />
      <PrivateRoute path="/user" component={user} />
    </BrowserRouter>
  );
}


const mapStateToProps = store => ({
  isLogined: store.login.isLogined,
});

AppRouter.propTypes = {
  isLogined: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  component: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(AppRouter);
