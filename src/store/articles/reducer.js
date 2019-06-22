import { initialState } from './selectors';
import * as actionTypes from './actionTypes';



export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ARTICLE_DETAIL_SUCCESS:
      return {
        ...state,
        articleList: action.response,
      };
      case actionTypes.GET_ARTICLE_DETAIL_BY_ID_SUCCESS:
      return {
        ...state,
        articleDetail: action.response,
      };
      case actionTypes.GET_ARTICLES_BY_PAGE_SUCCESS:
        return {
          ...state,
          articlePaginate: action.response,
        };
    default:
      return state;
  }
};