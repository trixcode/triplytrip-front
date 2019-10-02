import {
  take, put, call, fork,
} from 'redux-saga/effects';
import api from '../../services/api';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import * as mainActions from '../main/actions';

export function* loginUserRequest(requestParams) {
  try {
    const response = yield call(api.POST, 'auth/login', requestParams);
    yield put(actions.loginUserSuccess(response));
    localStorage.setItem('token', response.token);
    yield put(mainActions.setResponseSuccessStatuses({
      title: 'success!',
      message: 'Вы вошли в свой аккаунт!',
    }));
  } catch (responseError) {
    yield put(actions.loginUserFailure(responseError));
    yield put(mainActions.setResponseFailureStatuses({
      title: 'ooops!',
      message: responseError.message,
    }));
  }
}

export function* registerRequest(requestParams) {
  try {
    const response = yield call(api.POST, 'auth/register', requestParams);
    yield put(actions.registerSuccess(response));
    localStorage.setItem('token', response.token);
    yield put(mainActions.setResponseSuccessStatuses({
      title: 'success!',
      message: 'Вы успешно зарегистрировались!',
    }));
  } catch (responseError) {
    yield put(actions.registerFailure(responseError));
    yield put(mainActions.setResponseFailureStatuses({
      title: 'ooops!',
      message: responseError.message,
    }));
  }
}

export function* logoutUserRequest(requestParams) {
  try {
    const response = yield call(api.DELETE, 'auth/logout', requestParams);
    yield put(actions.logoutUserSuccess(response));
    yield put(mainActions.setResponseSuccessStatuses({
      message: response.message,
    }));
  } catch (responseError) {
    yield put(actions.logoutUserFailure(responseError));
    yield put(mainActions.setResponseFailureStatuses({
      message: responseError.message,
    }));
  }
}

export function* userRequest(requestParams) {
  try {
    const response = yield call(api.GET, 'users/myUser', requestParams);
    yield put(actions.userSuccess(response));
  } catch (responseError) {
    yield put(actions.userFailure(responseError));
  }
}


export function* wathcloginUserRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.LOGIN_USER_START);
    yield put(mainActions.setDefaultResponseStatuses());
    yield call(loginUserRequest, requestParams);
  }
}

export function* wathcRegisterRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.REGISTER_START);
    yield put(mainActions.setDefaultResponseStatuses());
    yield call(registerRequest, requestParams);
  }
}

export function* wathclogoutUserRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.LOGOUT_USER_START);
    yield put(mainActions.setDefaultResponseStatuses());
    yield call(logoutUserRequest, requestParams);
  }
}

export function* wathcUserRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.USER_START);
    yield call(userRequest, requestParams);
  }
}

export default function* () {
  yield fork(wathcloginUserRequest);
  yield fork(wathclogoutUserRequest);
  yield fork(wathcUserRequest);
  yield fork(wathcRegisterRequest);
}
