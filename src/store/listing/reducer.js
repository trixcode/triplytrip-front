import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_LISTING_SUCCESS:
      return {
        ...state,
        createListing: action.response,
      };
    case actionTypes.GET_USER_LISTING_SUCCESS:
      return {
        ...state,
        myListing: action.response,
      };
    default:
      return state;
  }
};
