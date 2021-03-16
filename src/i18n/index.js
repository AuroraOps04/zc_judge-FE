import VueI18n from "vue-i18n";
import Vue from "vue";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "zh",
  messages: {
    zh: require("./zh-CN.json"),
    en: require("./en.json")
  }
});

export default i18n;
