
import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TOP_DESTINATIONS_SUCCESS:
      return {
        ...state,
        topDestinations: action.response,
      };
    case actionTypes.GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.response,
      };
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.response,
      };
    case actionTypes.GET_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.response,
      };
    case actionTypes.SET_DEFAULT_STATUSES:
      return {
        ...state,
        responseStatuses: {
          isSuccess: false,
          isModalOpen: false,
          message: '',
          title: '',
        },
      };
    case actionTypes.SET_RESPONSE_SUCCESS_STATUSES:
      return {
        ...state,
        responseStatuses: {
          isSuccess: true,
          isOpen: true,
          title: action.responseStatuses.title,
          message: action.responseStatuses.message,
        },
      };
    case actionTypes.SET_RESPONSE_FAILURE_STATUSES:
      return {
        ...state,
        responseStatuses: {
          isSuccess: false,
          isOpen: true,
          title: action.responseStatuses.title,
          message: action.responseStatuses.message,
        },
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
