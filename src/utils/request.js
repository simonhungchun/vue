import axios from "axios";
import storejs from "storejs";
import router from "@/router";
import { message } from "ant-design-vue";

const request = axios.create({
  baseURL: "",
  timeout: 5000,
});

// 拦截器配置 。。。
request.interceptors.request.use((config) => {
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
