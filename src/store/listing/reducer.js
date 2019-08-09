import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_LISTING_SUCCESS:
      return {
        ...state,
        createListing: action.response,
      };
    default:
      return state;
  }
};
