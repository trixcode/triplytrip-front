import * as actionTypes from './actionTypes';


export const getArticleDetailStart = (articleList) => ({
  type: actionTypes.GET_ARTICLE_DETAIL_START,
  articleList,
});
export const getArticleDetailSuccess = (response) => ({
  type: actionTypes.GET_ARTICLE_DETAIL_SUCCESS,
  response,
});
export const getArticleDetailFailure = (responseError) => ({
  type: actionTypes.GET_ARTICLE_DETAIL_FAILURE,
  responseError,
});


export const getArticleDetailByIdStart = (articleDetail) => ({
  type: actionTypes.GET_ARTICLE_DETAIL_BY_ID_START,
  articleDetail,
});
export const getArticleDetailByIdSuccess = (response) => ({
  type: actionTypes.GET_ARTICLE_DETAIL_BY_ID_SUCCESS,
  response,
});
export const getArticleDetailByIdFailure = (responseError) => ({
  type: actionTypes.GET_ARTICLE_DETAIL_BY_ID_FAILURE,
  responseError,
});