import axios from "axios";
import Vue from "vue";

axios.defaults.baseURL = "/api";

export default {
  get: (url, params) => {
    return new Promise(resolve => {
      axios
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
      axios
        .post(url, data)
        .then(res => resolve(res.data))
        .catch(err => {
          Vue.prototype.$message.error(err);
        });
    });
  },
  put: (url, data) => {
    return new Promise(resolve => {
      axios
        .put(url, data)
        .then(res => resolve(res.data))
        .catch(err => {
          Vue.prototype.$message.error(err);
        });
    });
  },
  delete: (url, params) => {
    return new Promise(resolve => {
      axios
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
