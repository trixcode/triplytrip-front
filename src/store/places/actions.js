import * as actionTypes from './actionTypes';

export const getPlacesStart = (requestParams) => ({
    type: actionTypes.GET_PLACES_START,
    requestParams,
  });
  export const getPlacesSuccess = (response) => ({
    type: actionTypes.GET_PLACES_SUCCESS,
    response,
  });
  export const getPlacesFailure = (responseError) => ({
    type: actionTypes.GET_PLACES_FAILURE,
    responseError,
  });