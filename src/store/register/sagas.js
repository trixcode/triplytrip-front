import {
  take, put, call, fork,
} from 'redux-saga/effects';
import api from '../../services/api';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import * as mainActions from '../main/actions';
import * as loginActions from '../login/actions';

export function* registerRequest(requestParams) {
  try {
    const response = yield call(api.POST, 'auth/register', requestParams);
    yield put(actions.registerSuccess(response));
    yield put(loginActions.loginUserSuccess({
      user: response.user,
    }));
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
export function* wathcRegisterRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.REGISTER_START);
    yield put(mainActions.setDefaultResponseStatuses());
    yield call(registerRequest, requestParams);
  }
}
export default function* () {
  yield fork(wathcRegisterRequest);
}
