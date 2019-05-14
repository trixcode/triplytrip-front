
import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TOP_DESTINATIONS_SUCCESS:
      return {
        ...state,
        topDestinations: action.response,
      };
      case actionTypes.GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.response,
      };
    case actionTypes.GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.response,
      };
    default:
      return state;
  }
};