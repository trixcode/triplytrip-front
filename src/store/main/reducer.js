
import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TOP_DESTINATIONS_SUCCESS:
      return {
        ...state,
        topDestinations: action.response,
      };
    default:
      return state;
  }
};