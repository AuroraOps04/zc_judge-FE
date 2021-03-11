import Vue from "vue";
import VueRouter from "vue-router";

import Main from "@/views/Main";
import Login from "@/views/Login";
import Register from "@/views/Register";
import NotFound from "@/views/NotFound";

Vue.use(VueRouter);

const routes = [
  {
    //主页
    path: "/main",
    name: "Main",
    component: Main
  },
  {
    //登录页
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    //注册页
    path: "/register",
    name: "Register",
    component: Register
    // component: Register
  },
  //404未找到
  {
    path: "*",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
