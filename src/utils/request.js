import axios from "axios";
import storejs from "storejs";

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

export default request;
