import * as actionTypes from './actionTypes';

export const getLatestNewsStart = (requestParams) => ({
  type: actionTypes.GET_LATEST_NEWS_START,
  requestParams,
});

export const getLatestNewsSuccess = (response) => ({
  type: actionTypes.GET_LATEST_NEWS_SUCCESS,
  response,
});

export const getLatestNewsFailure = (responseError) => ({
  type: actionTypes.GET_LATEST_NEWS_FAILURE,
  responseError,
});
