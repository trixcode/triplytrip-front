import {
  take, put, call, fork,
} from 'redux-saga/effects';
import api from '../../services/api';
import * as actions from './actions';
import * as actionTypes from './actionTypes';


export function* getPlacesRequest(requestParams) {
  try {
    const response = yield call(api.GET, 'Place', { params: requestParams });
    yield put(actions.getPlacesSuccess(response));
  } catch (responseError) {
    yield put(actions.getPlacesFailure(responseError));
  }
}
export function* watchGetPlacesRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.GET_PLACES_START);
    yield call(getPlacesRequest, requestParams);
  }
}

export function* getPlaceDetailByIdRequest(placeId) {
  try {
    const response = yield call(api.GET, `Place/${placeId}`, { params: '_expand=user' });
    yield put(actions.getPlaceDetailByIdSuccess(response));
  } catch (responseError) {
    yield put(actions.getPlaceDetailByIdFailure(responseError));
  }
}
export function* watchGetPlaceDetailByIdRequest() {
  while (true) {
    const { placeId } = yield take(actionTypes.GET_PLACE_DETAIL_BY_ID_START);
    yield call(getPlaceDetailByIdRequest, placeId);
  }
}
export default function* () {
  yield fork(watchGetPlacesRequest);
  yield fork(watchGetPlaceDetailByIdRequest);
}
