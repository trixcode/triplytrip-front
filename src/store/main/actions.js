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



export const getArticlesStart = (requestParams) => ({
  type: actionTypes.GET_ARTICLES_START,
  requestParams,
});
export const getArticlesSuccess = (response) => ({
  type: actionTypes.GET_ARTICLES_SUCCESS,
  response,
});
export const getArticlesFailure = (responseError) => ({
  type: actionTypes.GET_ARTICLES_FAILURE,
});




export const getEventsStart = (requestParams) => ({
  type: actionTypes.GET_EVENTS_SRART,
  requestParams,
});
export const getEventsSuccess = (response) => ({
  type: actionTypes.GET_EVENTS_SUCCESS,
  response,
});
export const getEventsFailure = (responseError) => ({
  type: actionTypes.GET_EVENTS_FAILURE,
  responseError,
});