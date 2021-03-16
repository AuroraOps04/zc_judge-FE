import Api from "api";
import { storage } from "store/storage";
import types from "store/types";

const state = {
  profile: storage.getLocal("profile") || {}
};

const getters = {
  user: state => state.profile.user || {}
};

const mutations = {
  [types.CHANGE_PROFILE](state, profile) {
    storage.setLocal("profile", profile);
    state.profile = profile;
  }
};

const actions = {
  login(_, user) {
    return Api.post("/login", { user });
  },
  verifyAccountExists(_, { account, accountType }) {
    return Api.get("/verifyAccountExists", { account, accountType });
  },
  register(_, user) {
    return Api.post("/register", user);
  },
  changeProfile({ commit }, profile) {
    console.log(profile);
    commit(types.CHANGE_PROFILE, profile);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
