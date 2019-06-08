import * as actionTypes from './actionTypes';

export const getTopDestinationsStart = (requestParams) => ({
  type: actionTypes.GET_TOP_DESTINATIONS_START,
  requestParams,
});
export const getTopDestinationsSuccess = (response) => ({
  type: actionTypes.GET_TOP_DESTINATIONS_SUCCESS,
  response,
});
export const getTopDestinationsFailure = (responseError) => ({
  type: actionTypes.GET_TOP_DESTINATIONS_FAILURE,
  responseError,
});

export const getCategoriesStart = (requestParams) => ({
  type: actionTypes.GET_CATEGORIES_START,
  requestParams,
});
export const getCategoriesSuccess = (response) => ({
  type: actionTypes.GET_CATEGORIES_SUCCESS,
  response,
});
export const getCategoriesFailure = (responseError) => ({
  type: actionTypes.GET_CATEGORIES_FAILURE,
  responseError,
});

export const getCitiesStart = (requestParams) => ({
  type: actionTypes.GET_CITIES_START,
  requestParams,
});
export const getCitiesSuccess = (response) => ({
  type: actionTypes.GET_CITIES_SUCCESS,
  response,
});
export const getCitiesFailure = (responseError) => ({
  type: actionTypes.GET_CITIES_FAILURE,
  responseError,
});


export const setResponseSuccessStatuses = (responseStatuses) => ({
  type: actionTypes.SET_RESPONSE_SUCCESS_STATUSES,
  responseStatuses,
});
export const setResponseFailureStatuses = (responseStatuses) => ({
  type: actionTypes.SET_RESPONSE_FAILURE_STATUSES,
  responseStatuses,
});
export const setDefaultResponseStatuses = () => ({
  type: actionTypes.SET_DEFAULT_STATUSES,
  
});
