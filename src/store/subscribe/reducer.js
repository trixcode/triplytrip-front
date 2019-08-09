import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        createSubscribe: action.response,
      };
    default:
      return state;
  }
};
