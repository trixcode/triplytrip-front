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
export function* watchcreateListingRequest() {
  while (true) {
    const { formData } = yield take(actionTypes.CREATE_LISTING_START);
    yield call(createListingRequest, formData);
  }
}
export default function* () {
  yield fork(watchcreateListingRequest);
}
