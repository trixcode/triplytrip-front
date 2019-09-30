import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        token: action.response,
        user: action.response.user,
      };
    default:
      return state;
  }
};
