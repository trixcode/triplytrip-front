import * as actionTypes from './actionTypes';

export const createSubscribesStart = requestParams => ({
  type: actionTypes.CREATE_SUBSCRIBE_START,
  requestParams,
});
export const createSubscribesSuccess = response => ({
  type: actionTypes.CREATE_SUBSCRIBE_SUCCESS,
  response,
});
export const createSubscribesFailure = responseError => ({
  type: actionTypes.CREATE_SUBSCRIBE_FAILURE,
  responseError,
});
