import { storage } from "store/storage";

const state = {
  sidebar: {
    opened: storage.getLocal("sidebarStatus")
      ? !!+storage.getLocal("sidebarStatus")
      : true,
    withoutAnimation: false
  },
  device: "desktop",
  size: storage.getLocal("size") || "medium"
};

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened;
    state.sidebar.withoutAnimation = false;
    if (state.sidebar.opened) {
      storage.setLocal("sidebarStatus", 1);
    } else {
      storage.setLocal("sidebarStatus", 0);
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    storage.setLocal("sidebarStatus", 0);
    state.sidebar.opened = false;
    state.sidebar.withoutAnimation = withoutAnimation;
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device;
  },
  SET_SIZE: (state, size) => {
    state.size = size;
    storage.setLocal("size", size);
  }
};

const actions = {
  toggleSideBar({ commit }) {
    commit("TOGGLE_SIDEBAR");
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit("CLOSE_SIDEBAR", withoutAnimation);
  },
  toggleDevice({ commit }, device) {
    commit("TOGGLE_DEVICE", device);
  },
  setSize({ commit }, size) {
    commit("SET_SIZE", size);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
