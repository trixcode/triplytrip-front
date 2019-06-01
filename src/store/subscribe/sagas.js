import {
  take, put, call, fork,
} from 'redux-saga/effects';
import api from '../../services/api';
import * as actions from './actions';
import * as actionTypes from './actionTypes';


export function* createSubscribesRequest(requestParams) {
  try {
    const response = yield call(api.POST, 'subscribes', requestParams);
    yield put(actions.createSubscribesSuccess(response));
  } catch (responseError) {
    yield put(actions.createSubscribesFailure(responseError));
  }
}
export function* watchCreateSubscribesRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.CREATE_SUBSCRIBE_START);
    yield call(createSubscribesRequest, requestParams);
  }
}
export default function* () {
  yield fork(watchCreateSubscribesRequest);
}