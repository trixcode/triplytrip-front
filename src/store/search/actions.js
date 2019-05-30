import * as actionTypes from './actionTypes';

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