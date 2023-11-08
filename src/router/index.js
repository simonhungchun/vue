import { createRouter, createWebHistory } from "vue-router";
import storejs from "storejs";
import routes from "@/router/routes";
import { createDynamicRoutes } from "@/utils/dynamicRoutes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// 给每一次路由跳转注册一个回调函数 在跳转之前执行
// to(属性)：当前跳转的目标路由
// from(属性): 当前跳转的起始路由
// next(方法): 是否跳转
let isRefresh = true;
router.beforeEach((to, from) => {
  if (!storejs.get("auth") && !to.fullPath.startsWith("/auth") && isRefresh) {
    isRefresh = false;
    return { path: "/unauthorization" };
  }
  if (from.fullPath === "/" && isRefresh) {
    isRefresh = false;
    createDynamicRoutes();
    return { path: to.fullPath };
  }
  // if (from.fullPath === "/auth/login" && !storejs.get("auth")) {
  //   // 当你当前在登录页 且登陆凭证不存在 则无法跳到其他白屏页面
  //   // 不允许跳转 并给出提示
  //   // 可以跳转 但是目标改为401页面
  //   console.log(123);
  //   return { path: "/unauthorization" };
  // }
  return true;
});

export default router;
