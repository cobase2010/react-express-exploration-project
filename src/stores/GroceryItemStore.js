
const dispatcher = require('./../dispatcher.js');

function GroceryItemStore() {
  const items = [
    {
      name: 'Ice Cream',
    }, {
      name: 'Waffles',
    }, {
      name: 'Candy',
      purchased: true,
    }, {
      name: 'Snarks',
    },
  ];
  const listeners = [];

  function getItems() {
    return items;
  }

  function triggerListeners() {
    listeners
      .forEach((listener) => {
        listener(items);
      });
  }

  function addGroceryItem(item) {
    items.push(item);
    triggerListeners();
  }

  function deleteGroceryItem(item) {
    const index = items.findIndex((_item) => _item.name === item.name);
    items.splice(index, 1);
    triggerListeners();
  }

  function setGroceryItemBought(item, isBought) {
    const item2 = items.filter((a) => a.name === item.name)[0];
    item2.purchased = isBought || false;
    triggerListeners();
  }

  function onChange(listener) {
    listeners.push(listener);
  }

  dispatcher
    .register((event) => {
      console.log(`Event: ${event.payload}`);
      const split = event
        .type
        .split(':');
      if (split[0] === 'grocery-item') {
        switch (split[1]) {
          case 'add':
            addGroceryItem(event.payload);
            break;
          case 'delete':
            deleteGroceryItem(event.payload);
            break;
          case 'buy':
            setGroceryItemBought(event.payload, true);
            break;
          case 'unbuy':
            setGroceryItemBought(event.payload, false);
            break;
          default:
            break;
        }
      }
    });

  return { getItems, onChange };
}

module.exports = new GroceryItemStore();
