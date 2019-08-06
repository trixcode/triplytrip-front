import * as actionTypes from './actionTypes';

export const registerStart = (requestParams) => ({
    type: actionTypes.REGISTER_START,
    requestParams,
  });
  export const registerSuccess = (response) => ({
    type: actionTypes.REGISTER_SUCCESS,
    response,
  });
  export const registerFailure = (responseError) => ({
    type: actionTypes.REGISTER_FAILURE,
    responseError,
  });