import {
  take, put, call, fork,
} from 'redux-saga/effects';
import api from '../../services/api';
import * as actions from './actions';
import * as actionTypes from './actionTypes';


export function* getTopDestinationsRequest(requestParams) {
  try {
    const response = yield call(api.GET, 'top-destinations', requestParams);
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

export function* getLatestNewsRequest(requestParams) {
  try {
    const response = yield call(api.GET, 'articles?_limit=4', requestParams);
    yield put(actions.getLatestNewsSuccess(response));
  } catch (responseError) {
    yield put(actions.getLatestNewsFailure(responseError));
  }
}
export function* watchLatestNewsRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.GET_LATEST_NEWS_START);
    yield call(getLatestNewsRequest, requestParams);
  }
}

export default function* () {
  yield fork(watchGetTopDestinationsRequest);
  yield fork(watchLatestNewsRequest);

}
