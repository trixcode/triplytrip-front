import {
    take, put, call, fork,
  } from 'redux-saga/effects';
//   import api from '../../services/api';
  import * as actions from './actions';
  import * as actionTypes from './actionTypes';
  

  export function* exampleSagaWorker() {
    while (true) {
      const { data } = yield take(actionTypes.EXAMPLE_ACTION_TYPE);
      console.log(data)
    }
  }
  
  export default function* () {
    yield fork(exampleSagaWorker);
  }
  