import request from "@/utils/request";

export const login = async (data) =>
  (await request.post("/api/v1/users/login", data)).data.data;
// 以什么样的方式携带登陆凭证到后台？
// 上一个项目使用的 header.cookie  (js-cookie)
// headers.Authorization = `Bearer 凭据`
export const user_info = async () =>
  (await request.get("/api/v1/users/user_info")).data.data;

export const user_menus = async () =>
  (await request.get("/api/v1/menus/user_menus")).data.data;
