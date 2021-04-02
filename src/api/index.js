import axios from "axios";
import Vue from "vue";
import { storage } from "@/store/storage";
import store from "store";
// import router from "@/router";

const _instance = axios.create();

_instance.defaults.baseURL = "/api";

// intercept request
_instance.interceptors.request.use(function(config) {
  const user = storage.getLocal("user");
  let token = null;
  if (user) {
    token = user.token;
  }
  if (token) {
    config.headers["X-Authentication-Token"] = token;
  }
  return config;
});

// intercept response
_instance.interceptors.response.use(
  async response => {
    switch (response.data.code) {
      case 401:
        // 清除state和storage
        await store.dispatch("resetToken");
      // 跳转到登录页面
      // await router.push({
      //   name: "LoginAndRegister",
      //   query: {
      //     redirect: router.currentRoute.fullPath
      //   }
      // });
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default {
  get: (url, params) => {
    return new Promise(resolve => {
      _instance
        .get(url, {
          params
        })
        .then(res => resolve(res.data))
        .catch(err => {
          Vue.prototype.$message.error(err);
        });
    });
  },
  post: (url, data) => {
    return new Promise(resolve => {
      _instance
        .post(url, data)
        .then(res => resolve(res.data))
        .catch(err => {
          Vue.prototype.$message.error(err);
        });
    });
  },
  put: (url, data) => {
    return new Promise(resolve => {
      _instance
        .put(url, data)
        .then(res => resolve(res.data))
        .catch(err => {
          Vue.prototype.$message.error(err);
        });
    });
  },
  delete: (url, params) => {
    return new Promise(resolve => {
      _instance
        .delete(url, {
          params
        })
        .then(res => resolve(res.data))
        .catch(err => {
          Vue.prototype.$message.error(err);
        });
    });
  }
};
