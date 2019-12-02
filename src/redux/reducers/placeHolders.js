import {GET_PLACE_HOLDERS, FAILED_TO_GET_PLACE_HOLDERS } from '../action-types/index';
import initialState from '../store/initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PLACE_HOLDERS:
      return {
        ...state,
       placeHolders: payload,
      };
    case FAILED_TO_GET_PLACE_HOLDERS:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
