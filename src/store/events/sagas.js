import {
  take, put, call, fork,
} from 'redux-saga/effects';
import api from '../../services/api';
import * as actions from './actions';
import * as actionTypes from './actionTypes';


export function* getEventsRequest(requestParams) {
  try {
    const response = yield call(api.GET, 'events?limit=2', requestParams);
    yield put(actions.getEventsSuccess(response));
  } catch (responseError) {
    yield put(actions.getEventsFailure(responseError));
  }
}
export function* watchGetEventsRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.GET_EVENTS_START);
    yield call(getEventsRequest, requestParams);
  }
}

export default function* () {
  yield fork(watchGetEventsRequest);
}
