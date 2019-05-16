import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LATEST_NEWS_SUCCESS:
      return {
        ...state,
        latestNewsList: action.response,
      }
    default:
      return state;
  }
};