import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.LOGIN_USER_SUCCESS:
        return {
          ...state,
          token: action.response,
        };
      default:
        return state;
    }
  };