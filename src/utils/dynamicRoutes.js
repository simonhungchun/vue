import router from "@/router";
import { buildRoutes } from "@/utils/buildRoutes";
import { useUser } from "@/store/user";
export const createDynamicRoutes = () => {
  const user = useUser();
  const dynamicRoutes = buildRoutes(user.userMenu);
  dynamicRoutes.forEach((route) => router.addRoute(route));
};
// 脚手架(cra) 框架本身(react) 路由(react-router-dom) 状态管理(redux) UI库(antd) + 通用js库
// 脚手架(@vue/cli) 框架本身(vue) 路由(vue-router) 状态管理(vuex、pinia) UI库(antd-vue) + 通用js库
