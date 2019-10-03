import {
  take, put, call, fork,
} from 'redux-saga/effects';
import api from '../../services/api';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import * as mainActions from '../main/actions';


export function* createListingRequest(formData) {
  try {
    const response = yield call(api.POST, 'place', formData, { removeContentType: true });
    yield put(actions.createListingSuccess(response));
    yield put(mainActions.setResponseSuccessStatuses({
      title: 'success!',
      message: 'Заведение успешно созданно',
    }));
  } catch (responseError) {
    yield put(actions.createListingFailure(responseError));
    yield put(mainActions.setResponseFailureStatuses({
      title: 'ooops!',
      message: responseError.message,
    }));
  }
}

export function* getUserListingRequest(requestParams) {
  try {
    const response = yield call(api.GET, 'place/mylisting', { params: requestParams });
    yield put(actions.getUserListingSuccess(response));
  } catch (responseError) {
    yield put(actions.getUserListingFailure(responseError));
  }
}


export function* deleteUserListingRequest(placeID) {
  try {
    const response = yield call(api.DELETE, `place/delete/${placeID}`);
    yield put(actions.deleteUserListingSuccess(placeID));
    yield put(mainActions.setResponseSuccessStatuses({
      message: response.message,
    }));
  } catch (responseError) {
    yield put(actions.deleteUserListingFailure(responseError));
    yield put(mainActions.setResponseFailureStatuses({
      message: responseError.message,
    }));
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

export function* watchDeleteUserListingRequest() {
  while (true) {
    const { placeID } = yield take(actionTypes.DELETE_USER_LISTING_START);
    yield call(deleteUserListingRequest, placeID);
  }
}

export default function* () {
  yield fork(watchcreateListingRequest);
  yield fork(watchGetUserListingRequest);
  yield fork(watchDeleteUserListingRequest);
}
