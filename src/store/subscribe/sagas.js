import {
  take, put, call, fork,
} from 'redux-saga/effects';
import api from '../../services/api';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import * as mainActions from '../main/actions';

export function* createSubscribesRequest(requestParams) {
  try {
    const response = yield call(api.POST, 'subscribes', requestParams);
    yield put(actions.createSubscribesSuccess(response));
    yield put(mainActions.setResponseSuccessStatuses({
      title: 'success!',
      message: 'Your account has been created.'
    }));
  } catch (responseError) {
    yield put(actions.createSubscribesFailure(responseError));
    yield put(mainActions.setResponseFailureStatuses({
      title: 'Error!',
      message: responseError.message
    }));
  }
}
export function* watchCreateSubscribesRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.CREATE_SUBSCRIBE_START);
    yield put(mainActions.setDefaultResponseStatuses());
    yield call(createSubscribesRequest, requestParams);
  }
}
export default function* () {
  yield fork(watchCreateSubscribesRequest);
}