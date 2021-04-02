import { getToken, setToken, removeToken } from "@/utils/auth";
import { login, getInfo, register, verifyAccountExists } from "@/api/user";
const state = {
  token: getToken(),
  name: "",
  avatar: "",
  introduction: "",
  role: ""
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_ROLE: (state, role) => {
    state.role = role;
  }
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo)
        .then(response => {
          const { data } = response;
          commit("SET_TOKEN", data.token);
          setToken(data.token);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then(response => {
          const { data } = response;
          if (!data) {
            reject("Verification failed, please Login again.");
          }

          const { role, name, avatar } = data;

          // roles must be a non-empty array
          if (!role) {
            reject("getInfo: roles must be a non-null array!");
          }

          commit("SET_ROLE", role);
          commit("SET_NAME", name);
          commit("SET_AVATAR", avatar);
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // user logout
  logout({ dispatch }) {
    dispatch("resetToken");
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit("SET_TOKEN", "");
      commit("SET_ROLE", "");
      removeToken();
      resolve();
    });
  },

  register(_, user) {
    return register(user);
  },
  verifyAccountExists(_, user) {
    return verifyAccountExists(user);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
