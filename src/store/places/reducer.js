import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PLACES_SUCCESS:
      return {
        ...state,
        places: action.response,
      };
    case actionTypes.GET_PLACE_DETAIL_BY_ID_SUCCESS:
      return {
        ...state,
        placeDetail: action.response,
      };
    default:
      return state;
  }
};
