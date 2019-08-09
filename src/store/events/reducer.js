import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_EVENTS_SUCCESS:
      return {
        ...state,
        currentEvents: action.response,
      };
    default:
      return state;
  }
};
