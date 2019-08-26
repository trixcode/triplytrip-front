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
