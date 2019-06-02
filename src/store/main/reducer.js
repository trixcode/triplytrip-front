
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
      case actionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.response,
      };
    case actionTypes.GET_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.response,
      };
    default:
      return state;
  }
};