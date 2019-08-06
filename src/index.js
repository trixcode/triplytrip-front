import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppRouter from './root';
import store from './store/configure.js';

const reanderApp = () => (
  <Provider store={store}>
      <AppRouter />
  </Provider>
);

ReactDOM.render(reanderApp(), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();