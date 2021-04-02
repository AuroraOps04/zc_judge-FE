import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/utils/validator";
import "./plugins";
import "./icons";
import "normalize.css/normalize.css";
import "assets/fonts/iconfont.css";

import "./permissin";

Vue.config.productionTip = false;

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount("#app");
