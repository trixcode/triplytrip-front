import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.CREATE_REGISTER_SUCCESS:
        return {
          ...state,
          register: action.response,
        };
      case actionTypes.CREATE_LOGIN_SUCCESS:
        return{
          ...state,
          login: action.response,
        }
      default:
        return state;
    }
  };