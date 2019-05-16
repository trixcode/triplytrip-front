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

export function* getEventsRequest(requestParams) {
  try {
    const response = yield call(api.GET, 'events', requestParams);
    yield put(actions.getEventsSuccess(response));
  } catch (responseError) {
    yield put(actions.getEventsFailure(responseError));
  }
}
export function* watchGetEventsRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.GET_EVENTS_SRART);
    yield call(getEventsRequest, requestParams);
  }
}

export default function* () {
  yield fork(watchGetTopDestinationsRequest);
  yield fork(watchGetEventsRequest)
}
