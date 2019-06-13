import {
  take, put, call, fork,
} from 'redux-saga/effects';
import api from '../../services/api';
import * as actions from './actions';
import * as actionTypes from './actionTypes';


export function* createRegisterRequest(requestParams) {
  try {
    const response = yield call(api.POST, 'register', requestParams);
    yield put(actions.createRegisterSuccess(response));
  } catch (responseError) {
    yield put(actions.createRegisterFailure(responseError));
  }
}
export function* watchCreateRegisterRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.CREATE_REGISTER_START);
    yield call(createRegisterRequest, requestParams);
  }
}

export function* createLoginRequest(requestParams) {
  try {
    const response = yield call(api.GET, 'register', requestParams);
    yield put(actions.createLoginSuccess(response));
  } catch (responseError) {
    yield put(actions.createLoginFailure(responseError));
  }
}
export function* watchCreateLoginRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.CREATE_LOGIN_START);
    yield call(createLoginRequest, requestParams);
  }
}



export default function* () {
  yield fork(watchCreateRegisterRequest);
  yield fork(watchCreateLoginRequest);

}