import {
  take, put, call, fork,
} from 'redux-saga/effects';
import api from '../../services/api';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import * as mainActions from '../main/actions';
// import { setLogined, setNotLogined } from '../actions';

export function* loginUserRequest(requestParams) {
  try {
    const response = yield call(api.POST, 'auth/login', requestParams);
    if (response.error) {
      yield put(actions.loginUserFailure());
      yield put(mainActions.setResponseFailureStatuses({
        title: 'ooops!',
        message: response.error,
      }));
    } else {
      yield put(actions.loginUserSuccess(response));
      yield put(mainActions.setResponseSuccessStatuses({
        title: 'success!',
        message: 'Вы вошли в свой аккаунт!',
      }));
    }
  } catch (responseError) {
    yield put(actions.loginUserFailure(responseError));
    yield put(mainActions.setResponseFailureStatuses({
      title: 'ooops!',
      message: responseError.message,
    }));
  }
}
export function* wathcloginUserRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.LOGIN_USER_START);
    yield put(mainActions.setDefaultResponseStatuses());
    yield call(loginUserRequest, requestParams);
  }
}
export default function* () {
  yield fork(wathcloginUserRequest);
}
