const dispatcher = require('./../dispatcher.js');

module.exports = {
  add(item) {
    dispatcher.dispatch({
      payload: item,
      type: 'grocery-item:add',
    });
  },
  delete(item) {
    dispatcher.dispatch({
      payload: item,
      type: 'grocery-item:delete',
    });
  },
  buy(item) {
    dispatcher.dispatch({
      payload: item,
      type: 'grocery-item:buy',
    });
  },
  unbuy(item) {
    dispatcher.dispatch({
      payload: item,
      type: 'grocery-item:unbuy',
    });
  },
};
