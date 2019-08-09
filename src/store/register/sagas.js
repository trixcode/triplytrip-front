import {
  take, put, call, fork,
} from 'redux-saga/effects';
import api from '../../services/api';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import * as mainActions from '../main/actions';

export function* registerRequest(requestParams) {
  try {
    const response = yield call(api.POST, 'auth/register', requestParams);
    if (response.errors) {
      yield put(actions.registerFailure());
      yield put(mainActions.setResponseFailureStatuses({
        title: 'ooops!',
        message: response.message,
      }));
    } else {
      yield put(actions.registerSuccess(response));
      yield put(mainActions.setResponseSuccessStatuses({
        title: 'success!',
        message: 'Вы успешно зарегистрировались!',
      }));
    }
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
