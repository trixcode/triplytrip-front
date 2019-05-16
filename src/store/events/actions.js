import * as actionTypes from './actionTypes';

export const getEventsStart = (requestParams) => ({
    type: actionTypes.GET_EVENTS_START,
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