import { initialState } from './selectors';
import * as actionTypes from './actionTypes';



export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ARTICLE_DETAIL_SUCCESS:
      return {
        ...state,
        articleList: action.response,
      };
      case actionTypes.GET_ARTICLE_BY_ID_SUCCESS:
      return {
        ...state,
        articleDetail: action.response,
      };
    default:
      return state;
  }
};