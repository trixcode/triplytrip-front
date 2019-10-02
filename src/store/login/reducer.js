import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: {
          token: action.response.token,
        },
        user: action.response.user,
      };
    case actionTypes.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        token: {
          token: '',
        },
        isLogined: false,
      };
    case actionTypes.USER_SUCCESS:
      return {
        ...state,
        token: {
          token: action.response.token,
        },
        user: action.response.user,
        isLogined: action.response.isLogined,
      };
    case actionTypes.SET_LOGINED:
      return {
        ...state,
        isLogined: true,
      };
    case actionTypes.SET_NOT_LOGINED:
      return {
        ...state,
        isLogined: false,
      };
    default:
      return state;
  }
};
