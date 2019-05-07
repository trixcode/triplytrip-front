
import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EXAMPLE_ACTION_TYPE:
        return {
        ...state,
        main: true,
        };
    default:
      return state;
  }
};
