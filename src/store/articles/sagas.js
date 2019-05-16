import {
  take, put, call, fork,
} from 'redux-saga/effects';
import api from '../../services/api';
import * as actions from './actions';
import * as actionTypes from './actionTypes';



export function* getArticleDetailRequest(articleList) {
  try {
    const response = yield call(api.GET, 'articles', articleList);
    yield put(actions.getArticleDetailSuccess(response));
  } catch (responseError) {
    yield put(actions.getArticleDetailFailure(responseError));
  }
}


export function* getArticleDetailByIdRequest(articleDetail) {
  try {
    const response = yield call(api.GET, `articles/${articleDetail}`);
    yield put(actions.getArticleDetailByIdSuccess(response));
  } catch (responseError) {
    yield put(actions.getArticleDetailByIdFailure(responseError));
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
    const { articleDetail } = yield take(actionTypes.GET_ARTICLE_DETAIL_BY_ID_START);
    yield call(getArticleDetailByIdRequest, articleDetail);
  }
}

export default function* () {
  yield fork(watchGetArticleDetailRequest);
  yield fork(watchGetArticleDetailByIdRequest);
}
