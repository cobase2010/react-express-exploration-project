import * as types from './../actions/actionTypes';

// All these reducers transforms one state (an array of items) to another state (an array of items)
export default function itemReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_ITEM:
      // debugger;
      return [...state,
        Object.assign({}, action.item),
      ];
    case types.TOGGLE_ITEM:
      return state.map((item, index) => {
        if (item.name === action.item.name) {
          return Object.assign({}, item, {
            purchased: !item.purchased,
          });
        }
        return item;
      });
    case types.REMOVE_ITEM: {
      // debugger;
      const index = state.findIndex((item) => (action.item.name === item.name));
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    }
    default:
      return state;
  }
}
