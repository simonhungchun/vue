import router from "@/router";
import { buildRoutes } from "@/utils/buildRoutes";
export const createDynamicRoutes = () => {
  const dynamicRoutes = buildRoutes();
  console.log(dynamicRoutes);
  // todo调用router.addRoute添加动态路由！！！
  dynamicRoutes.forEach((route) => router.addRoute(route));
  console.log(router.getRoutes());
};
