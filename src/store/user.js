import { defineStore } from "pinia";
import { message } from "ant-design-vue";
import router from "@/router";
import { user_info, user_menus, login } from "@/api";
import { createDynamicRoutes } from "@/utils/dynamicRoutes";
export const useUser = defineStore("user", {
  // 定义原始数据的（查）
  state() {
    return {
      auth: {},
      userInfo: {},
      userMenu: [],
    };
  },
  // 对原始数据进行处理的（查）
  getters: {},
  // 对数据进行修改的(增删改)
  actions: {
    async userLogin(user) {
      this.auth = await login(user).catch((err) => console.log(err));
      this.getUserMenu();
      this.getUserInfo();
      router.replace("/");
      message.success("登陆成功！");
    },
    async getUserInfo() {
      this.userInfo = await user_info().catch((err) => console.log(err));
    },
    async getUserMenu() {
      this.userMenu = await user_menus().catch((err) => console.log(err));
      createDynamicRoutes();
    },
  },
  persist: {
    // 通过storage指定本地存储类型 默认为localStorage
    storage: localStorage,
    // 配置存储到本地的key值
    key: "user_storage",
    //
    paths: ["userInfo", "userMenu", "auth"],
  },
});
// 当配置项persist配置为true时 则state中的所有数据都会被持久化（刷新数据不丢失）
