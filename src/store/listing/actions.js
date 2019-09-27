import * as actionTypes from './actionTypes';

export const createListingStart = formData => ({
  type: actionTypes.CREATE_LISTING_START,
  formData,
});
export const createListingSuccess = response => ({
  type: actionTypes.CREATE_LISTING_SUCCESS,
  response,
});
export const createListingFailure = responseError => ({
  type: actionTypes.CREATE_LISTING_FAILURE,
  responseError,
});


export const getUserListingStart = requsetParams => ({
  type: actionTypes.GET_USER_LISTING_START,
  requsetParams,
});
export const getUserListingSuccess = response => ({
  type: actionTypes.GET_USER_LISTING_SUCCESS,
  response,
});
export const getUserListingFailure = responseError => ({
  type: actionTypes.GET_USER_LISTING_FAILURE,
  responseError,
});


export const deleteUserListingStart = placeID => ({
  type: actionTypes.DELETE_USER_LISTING_START,
  placeID,
});
export const deleteUserListingSuccess = placeID => ({
  type: actionTypes.DELETE_USER_LISTING_SUCCESS,
  placeID,
});
export const deleteUserListingFailure = responseError => ({
  type: actionTypes.DELETE_USER_LISTING_FAILURE,
  responseError,
});
