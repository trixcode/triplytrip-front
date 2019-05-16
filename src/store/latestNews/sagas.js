import {
  take, put, call, fork,
} from 'redux-saga/effects';
import api from '../../services/api';
import * as actions from './actions';
import * as actionTypes from './actionTypes';


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
  yield fork(watchLatestNewsRequest);
}