import * as types from './actionTypes';

export function addItem(item) {
  return { type: types.ADD_ITEM, item };
}

export function removeItem(item) {
  return {
    type: types.REMOVE_ITEM, item,
  };
}

export function toggleItem(item) {
  return { type: types.TOGGLE_ITEM, item };
}
