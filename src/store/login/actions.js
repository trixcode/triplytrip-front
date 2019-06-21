import * as actionTypes from './actionTypes';

export const loginUserStart = (requestParams) => ({
    type: actionTypes.LOGIN_USER_START,
    requestParams,
  });
  export const loginUserSuccess = (response) => ({
    type: actionTypes.LOGIN_USER_SUCCESS,
    response,
  });
  export const loginUserFailure = (responseError) => ({
    type: actionTypes.LOGIN_USER_FAILURE,
    responseError,
  });