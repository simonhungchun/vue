import axios from "axios";

const request = axios.create({
  baseURL: "",
  timeout: 5000,
});

// 拦截器配置 。。。

export default request;
