import {
  take, put, call, fork,
} from 'redux-saga/effects';
import api from '../../services/api';
import * as actions from './actions';
import * as actionTypes from './actionTypes';


export function* createListingRequest(formData) {
  try {
    const response = yield call(api.POST, 'place', formData, { removeContentType: true });
    yield put(actions.createListingSuccess(response));
  } catch (responseError) {
    yield put(actions.createListingFailure(responseError));
  }
}

export function* getUserListingRequest(requestParams) {
  try {
    const response = yield call(api.GET, 'place/my', { params: requestParams });
    yield put(actions.getUserListingSuccess(response));
  } catch (responseError) {
    yield put(actions.getUserListingFailure(responseError));
  }
}


export function* watchcreateListingRequest() {
  while (true) {
    const { formData } = yield take(actionTypes.CREATE_LISTING_START);
    yield call(createListingRequest, formData);
  }
}

export function* watchGetUserListingRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.GET_USER_LISTING_START);
    yield call(getUserListingRequest, requestParams);
  }
}

export default function* () {
  yield fork(watchcreateListingRequest);
  yield fork(watchGetUserListingRequest);
}
