import { createStore } from "vuex";

const store = createStore({
  state: {
    userInfo: null, // 存储用户信息
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo; // 设置用户信息
    },
    clearUserInfo(state) {
      state.userInfo = null; // 清除用户信息
    },
  },
  actions: {
    setUserInfo({ commit }, userInfo) {
      commit("setUserInfo", userInfo); // 提交mutation以更新用户信息
    },
    clearUserInfo({ commit }) {
      commit("clearUserInfo"); // 提交mutation以清除用户信息
    },
  },
  getters: {
    userInfo: (state) => state.userInfo, // 获取用户信息
  },
});

export default store;
