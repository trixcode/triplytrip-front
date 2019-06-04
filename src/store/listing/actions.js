import * as actionTypes from './actionTypes';

export const createListingStart = (requestParams) => ({
    type: actionTypes.CREATE_LISTING_START,
    requestParams,
  });
  export const createListingSuccess = (response) => ({
    type: actionTypes.CREATE_LISTING_SUCCESS,
    response,
  });
  export const createListingFailure = (responseError) => ({
    type: actionTypes.CREATE_LISTING_FAILURE,
    responseError,
  });