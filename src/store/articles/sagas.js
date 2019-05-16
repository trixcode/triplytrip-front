import {
  take, put, call, fork,
} from 'redux-saga/effects';
import api from '../../services/api';
import * as actions from './actions';
import * as actionTypes from './actionTypes';



export function* getArticleDetailRequest(requestParams) {
  try {
    const response = yield call(api.GET, 'articles', requestParams);
    yield put(actions.getArticleDetailSuccess(response));
  } catch (responseError) {
    yield put(actions.getArticleDetailFailure(responseError));
  }
}


export function* getArticleByIdRequest(articleId) {
  try {
    const response = yield call(api.GET, `articles/${articleId}`);
    yield put(actions.getArticleDetailByIdSuccess(response));
  } catch (responseError) {
    yield put(actions.getArticleDetailByIdFailure(responseError));
  }
}



export function* watchGetArticleDetailRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.GET_ARTICLE_DETAIL_START);
    yield call(getArticleRequest, requestParams);
  }
}


export function* watchGetArticleByIdRequest() {
  while (true) {
    const { articleId } = yield take(actionTypes.GET_ARTICLE_BY_ID_START);
    yield call(getArticleByIdRequest, articleId);
  }
}

export default function* () {
  yield fork(watchGetArticleDetailRequest);
  yield fork(watchGetArticleByIdRequest);
}
