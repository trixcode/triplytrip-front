import * as actionTypes from './actionTypes';

export const createRegisterStart = (requestParams) => ({
  type: actionTypes.CREATE_REGISTER_START,
  requestParams,
});
export const createRegisterSuccess = (response) => ({
  type: actionTypes.CREATE_REGISTER_SUCCESS,
  response,
});
export const createRegisterFailure = (responseError) => ({
  type: actionTypes.CREATE_REGISTER_FAILURE,
  responseError,
});

export const createLoginStart = (requestParams) => ({
  type: actionTypes.CREATE_LOGIN_START,
  requestParams,
});
export const createLoginSuccess = (response) => ({
  type: actionTypes.CREATE_LOGIN_SUCCESS,
  response,
});
export const createLoginFailure = (responseError) => ({
  type: actionTypes.CREATE_LOGIN_FAILURE,
  responseError,
});

