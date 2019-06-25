import {
  take, put, call, fork,
} from 'redux-saga/effects';
import api from '../../services/api';
import * as actions from './actions';
import * as actionTypes from './actionTypes';


export function* getTopDestinationsRequest(requestParams) {
  try {
    const response = yield call(api.GET, 'discovery?limit=4', requestParams);
    yield put(actions.getTopDestinationsSuccess(response));
  } catch (responseError) {
    yield put(actions.getTopDestinationsFailure(responseError));
  }
}

export function* watchGetTopDestinationsRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.GET_TOP_DESTINATIONS_START);
    yield call(getTopDestinationsRequest, requestParams);
  }
}

export function* getCategoriesRequest(requestParams) {
  try {
    const response = yield call(api.GET, 'category_place', {params: requestParams});
    yield put(actions.getCategoriesSuccess(response));
  } catch (responseError) {
    yield put(actions.getCategoriesFailure(responseError));
  }
}
export function* watchGetCategoriesRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.GET_CATEGORIES_START);
    yield call(getCategoriesRequest, requestParams);
  }
}

export function* getCitiesRequest(requestParams) {
  try {
    const response = yield call(api.GET, 'cities', {params: requestParams});
    yield put(actions.getCitiesSuccess(response));
  } catch (responseError) {
    yield put(actions.getCitiesFailure(responseError));
  }
}
export function* watchGetCitiesRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.GET_CITIES_START);
    yield call(getCitiesRequest, requestParams);
  }
}
export default function* () {
  yield fork(watchGetTopDestinationsRequest);
  yield fork(watchGetCategoriesRequest);
  yield fork(watchGetCitiesRequest);
}
