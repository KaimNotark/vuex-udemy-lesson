import Vue from "vue";

const usersStore = {
  namespaced: true,
  state: {
    list: {
      1: {
        name: "Alex",
        age: 42,
      },
    },
  },
  getters: {
    usersList: ({ list }) => Object.values(list),
  },
  mutations: {
    ADD_USER(state, user) {
      console.log(state, user);
      // state.list[user.id] = user; эта запись не позволяет
      // обновляться данным во Vue, т.к. Vue не видит
      // изменения во вложенных объектах.
      // поэтому нужна такая запись:
      Vue.set(state.list, user.id, user);
    },
  },
  actions: {
    // первым аргументом идет context , но поскольку нам нужен
    // только один метод commit, то мы деструктурируем context и запись
    // выглядит так {commit}

    // addNewUser(context, user) {
    addNewUser({ commit }, user) {
      // преобразуем данные в нужный формат
      const newUser = { ...user, id: String(Math.random()) };
      commit("ADD_USER", newUser);
    },
  },
};

export default usersStore;
