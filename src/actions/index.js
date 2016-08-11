import * as constants from '../constants/constants';
import * as types from '../constants/actionTypes';

function listLoaded(list) {
  return {
    type: types.LIST_LOADED,
    payload: list
  };
}

export const loadList = () => async (dispatch) => {
  try {
    const response = await window.fetch(constants.DATA_URL);
    const json = await response.json();

    dispatch(listLoaded(json.list));
  } catch (e) {
    console.log('something wrong');
  }
};
