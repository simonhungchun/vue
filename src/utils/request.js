import axios from "axios";
import storejs from "storejs";
import router from "@/router";
import { message } from "ant-design-vue";
// 生成source
const source = axios.CancelToken.source();
const request = axios.create({
  baseURL: "",
  timeout: 5000,
});

// 拦截器配置 。。。
request.interceptors.request.use((config) => {
  config.cancelToken = source.token;
  // 设置请求权限
  const user_info = storejs.get("user_info");
  if (Array.isArray(user_info?.permissions)) {
    if (user_info.permissions.indexOf(`${config.method}:${config.url}`) < 0) {
      source.cancel("您没有权限访问此服务或请求方式和请求的API地址不合法！");
    }
  }
  const auth = storejs.get("auth");
  if (auth?.accessToken) {
    // config.headers.set("请求头key",'请求头的value')
    config.headers.set("Authorization", `Bearer ${auth.accessToken}`);
  }
  return config;
});

request.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ERR_CANCELED") {
      return message.error(error.message);
    }
    if (error.response.status === 401) {
      storejs.remove("auth");
      storejs.remove("user_info");
      storejs.set("user_menus", []);
      message.error("认证失败，请重新登录！");
      router.replace({ path: "/auth/register" });
    }
  }
);

export default request;
