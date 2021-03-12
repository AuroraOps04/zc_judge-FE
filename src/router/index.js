import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("components/Layout"),
    // redirect: "/LoginAndRegiser",
    children: []
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("components/Admin/AdminLayout"),
    children: []
  },
  // normal login and register
  {
    path: "/LoginAndRegister",
    name: "LoginAndRegister",
    component: () => import("views/LoginAndRegister")
  },
  {
    path: "*",
    component: () => import("views/NotFound")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
