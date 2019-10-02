import * as actionTypes from './actionTypes';

export const loginUserStart = requestParams => ({
  type: actionTypes.LOGIN_USER_START,
  requestParams,
});
export const loginUserSuccess = response => ({
  type: actionTypes.LOGIN_USER_SUCCESS,
  response,
});
export const loginUserFailure = responseError => ({
  type: actionTypes.LOGIN_USER_FAILURE,
  responseError,
});

export const registerStart = requestParams => ({
  type: actionTypes.REGISTER_START,
  requestParams,
});
export const registerSuccess = response => ({
  type: actionTypes.REGISTER_SUCCESS,
  response,
});
export const registerFailure = responseError => ({
  type: actionTypes.REGISTER_FAILURE,
  responseError,
});


export const logoutUserStart = () => ({
  type: actionTypes.LOGOUT_USER_START,
});
export const logoutUserSuccess = response => ({
  type: actionTypes.LOGOUT_USER_SUCCESS,
  response,
});
export const logoutUserFailure = responseError => ({
  type: actionTypes.LOGOUT_USER_FAILURE,
  responseError,
});

export const userStart = requestParams => ({
  type: actionTypes.USER_START,
  requestParams,
});
export const userSuccess = response => ({
  type: actionTypes.USER_SUCCESS,
  response,
});
export const userFailure = responseError => ({
  type: actionTypes.USER_FAILURE,
  responseError,
});


export const setLogined = isLogined => ({
  type: actionTypes.SET_LOGINED,
  isLogined,
});
export const setNotLogined = isLogined => ({
  type: actionTypes.SET_NOT_LOGINED,
  isLogined,
});
