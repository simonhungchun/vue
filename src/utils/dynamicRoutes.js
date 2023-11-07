import router from "@/router";
import { buildRoutes } from "@/utils/buildRoutes";
export const createDynamicRoutes = () => {
  const dynamicRoutes = buildRoutes();
  dynamicRoutes.forEach((route) => router.push(route));
};
