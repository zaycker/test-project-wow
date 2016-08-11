import * as types from '../constants/actionTypes';

export default function filters(state = {}, action) {
  switch (action.type) {
    case types.FILTER_CHANGE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
