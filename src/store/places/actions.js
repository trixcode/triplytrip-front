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

  export const getPlaceDetailByIdStart = (placeId) => ({
    type: actionTypes.GET_PLACE_DETAIL_BY_ID_START,
    placeId,
  });
  export const getPlaceDetailByIdSuccess = (response) => ({
    type: actionTypes.GET_PLACE_DETAIL_BY_ID_SUCCESS,
    response,
  });
  export const getPlaceDetailByIdFailure = (responseError) => ({
    type: actionTypes.GET_PLACE_DETAIL_BY_ID_FAILURE,
    responseError,
  });