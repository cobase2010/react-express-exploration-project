const guid = require('guid');

const listeners = {};

module.exports = {
  register(cb) {
    const id = guid.raw();
    listeners[id] = cb;
    return id;
  },
  dispatch(payload) {
    console.info('Dispatching...', payload);
    Object.keys(listeners).forEach((key, index) => {
      if (index !== null) {
        const listener = listeners[key];
        listener(payload);
      }
    });
  },
};
