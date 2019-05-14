
import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TOP_DESTINATIONS_SUCCESS:
      return {
        ...state,
        topDestinations: action.response,
      };
    case actionTypes.GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.response,
      };
    case actionTypes.GET_LATEST_NEWS_SUCCESS:
      return {
        ...state,
        latestNews: action.response,
      }  
    default:
      return state;
  }
};