import Vue from "vue";
import VueRouter from "vue-router";
import AdminLayout from "components/Admin/AdminLayout";
Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/",
    name: "Home",
    component: () => import("components/Layout"),
    children: []
  },
  // normal login and register
  {
    path: "/LoginAndRegister",
    name: "LoginAndRegister",
    component: () => import("views/LoginAndRegister")
  },
  {
    path: "/404",
    component: () => import("views/ErrorPage/404")
  }
];

// export const asyncRoutes = [
//   {
//     path: "/admin",
//     component: AdminLayout,
//     redirect: "/admin/dashboard",
//     children: [
//       {
//         name: "dashboard",
//         path: "dashboard",
//         component: () => import("views/Admin/Dashboard"),
//         meta: {
//           roles: ["admin", "teacher"],
//           title: "dashboard",
//           affix: true
//         }
//       },
//       {
//         name: "test",
//         path: "test",
//         component: () => import("views/test"),
//         meta: {
//           roles: ["admin", "teacher"],
//           title: "测试页面"
//         }
//       }
//     ]
//   },
//   { path: "*", redirect: "/404", hidden: true }
// ];

export const asyncRoutes = [
  {
    path: "/admin",
    component: AdminLayout,
    redirect: "/admin/dashboard",
    children: [
      {
        name: "dashboard",
        path: "dashboard",
        component: () => import("views/Admin/Dashboard"),
        meta: {
          roles: ["admin", "teacher"],
          title: "dashboard",
          affix: true,
          icon: "dashboard"
        }
      }
    ]
  },
  {
    path: "/admin/problem",
    component: AdminLayout,
    meta: {
      role: ["admin", "teacher"],
      title: "题目管理"
    },
    children: [
      {
        name: "problem-list",
        path: "list",
        component: () => import("views/Admin/Problem/list"),
        meta: {
          roles: ["admin", "teacher"],
          title: "题目列表"
        }
      }
    ]
  },
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new VueRouter({
    mode: "hash", // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
