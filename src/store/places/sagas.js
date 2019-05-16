import {
    take, put, call, fork,
  } from 'redux-saga/effects';
  import api from '../../services/api';
  import * as actions from './actions';
  import * as actionTypes from './actionTypes';


  export function* getPlacesRequest(requestParams) {
    try {
      const response = yield call(api.GET, 'places', {params: requestParams});
      yield put(actions.getPlacesSuccess(response));
    } catch (responseError) {
      yield put(actions.getPlacesFailure(responseError));
    }
  }
  export function* watchGetPlacesRequest() {
    while (true) {
      const { requestParams } = yield take(actionTypes.GET_PLACES_START);
      yield call(getPlacesRequest, requestParams);
    }
  }

  export default function* () {
    yield fork(watchGetPlacesRequest);
  }