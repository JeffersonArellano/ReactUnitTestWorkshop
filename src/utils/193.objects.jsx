export const createStore = () => {
  let store = [];

  return {
    add: (item) => {
      store = [...store, item];
    },

    get: () => {
      return store;
    },

    getById: (id) => {
      return store.filter((item) => item.id === id)[0];
    },
  };
};
