import {
  take, put, call, fork,
} from 'redux-saga/effects';
import api from '../../services/api';
import * as actions from './actions';
import * as actionTypes from './actionTypes';



export function* getArticleDetailRequest(articleList) {
  try {
    const response = yield call(api.GET, 'Articles', articleList);
    yield put(actions.getArticleDetailSuccess(response));
  } catch (responseError) {
    yield put(actions.getArticleDetailFailure(responseError));
  }
}


export function* getArticleDetailByIdRequest(articleId) {
  try {
    const response = yield call(api.GET, `Articles/${articleId}`);
    yield put(actions.getArticleDetailByIdSuccess(response));
  } catch (responseError) {
    yield put(actions.getArticleDetailByIdFailure(responseError));
  }
}

export function* getArticlesByPageRequest(articlePage) {
  try {
    const response = yield call(api.GET, `Articles?_limit=3&_page=${articlePage}`);
    yield put(actions.getArticlesByPageSuccess(response));
  } catch (responseError) {
    yield put(actions.getArticlesByPageFailure(responseError));
  }
}

export function* getArticlesByIdRequest(articlePage) {
  try {
    const response = yield call(api.GET, `Articles?limit=4`, articlePage);
    yield put(actions.getArticlesByIdSuccess(response));
  } catch (responseError) {
    yield put(actions.getArticlesByIdFailure(responseError));
  }
}


export function* watchGetArticleDetailRequest() {
  while (true) {
    const { articleList } = yield take(actionTypes.GET_ARTICLE_DETAIL_START);
    yield call(getArticleDetailRequest, articleList);
  }
}


export function* watchGetArticleDetailByIdRequest() {
  while (true) {
    const { articleId } = yield take(actionTypes.GET_ARTICLE_DETAIL_BY_ID_START);
    yield call(getArticleDetailByIdRequest, articleId);
  }
}


export function* watchGetArticlesByPageRequest() {
  while (true) {
    const { articlePage } = yield take(actionTypes.GET_ARTICLES_BY_PAGE_START);
    yield call(getArticlesByPageRequest, articlePage);
  }
}


export function* watchGetArticlesByIdRequest() {
  while (true) {
    const { articlePage } = yield take(actionTypes.GET_ARTICLES_BY_ID_START);
    yield call(getArticlesByIdRequest, articlePage);
  }
}


export default function* () {
  yield fork(watchGetArticleDetailRequest);
  yield fork(watchGetArticleDetailByIdRequest);
  yield fork(watchGetArticlesByPageRequest);
  yield fork(watchGetArticlesByIdRequest);

}
