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


export const getArticleDetailByIdStart = (articleId) => ({
  type: actionTypes.GET_ARTICLE_DETAIL_BY_ID_START,
  articleId,
});
export const getArticleDetailByIdSuccess = (response) => ({
  type: actionTypes.GET_ARTICLE_DETAIL_BY_ID_SUCCESS,
  response,
});
export const getArticleDetailByIdFailure = (responseError) => ({
  type: actionTypes.GET_ARTICLE_DETAIL_BY_ID_FAILURE,
  responseError,
});


export const getArticlesByPageStart = (articlePage) => ({
  type: actionTypes.GET_ARTICLES_BY_PAGE_START,
  articlePage,
});
export const getArticlesByPageSuccess = (response) => ({
  type: actionTypes.GET_ARTICLES_BY_PAGE_SUCCESS,
  response,
});
export const getArticlesByPageFailure = (responseError) => ({
  type: actionTypes.GET_ARTICLES_BY_PAGE_FAILURE,
  responseError,
});

export const getArticlesByIdStart = (articlePage) => ({
  type: actionTypes.GET_ARTICLES_BY_ID_START,
  articlePage,
});
export const getArticlesByIdSuccess = (response) => ({
  type: actionTypes.GET_ARTICLES_BY_ID_SUCCESS,
  response,
});
export const getArticlesByIdFailure = (responseError) => ({
  type: actionTypes.GET_ARTICLES_BY_ID_FAILURE,
  responseError,
});