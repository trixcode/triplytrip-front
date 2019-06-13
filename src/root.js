import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import addListing from './pages/addListing'
import articles from './pages/articles'
import placesCategory from './pages/placesCategory'
import detail from './pages/dynamic/detail'
import article from './pages/dynamic/article'

function AppRouter() {
  
    return (
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/addListing" component={addListing} />
        <Route path="/articles" component={articles} />
        <Route path="/placesCategory" component={placesCategory} />
        <Route path="/detail/:placeId" component={detail} />
        <Route path="/article" component={article} />
      </BrowserRouter>
    );
  }
  
  export default AppRouter;