import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

const deletePlaceID = (mylist, ID) => mylist.filter(list => list._id !== ID);

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
    case actionTypes.DELETE_USER_LISTING_SUCCESS:
      return {
        ...state,
        myListing: deletePlaceID(state.myListing, action.placeID),
      };
    default:
      return state;
  }
};
