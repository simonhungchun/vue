import { createApp } from "vue";
// import { Button } from "ant-design-vue";
// 当前App组件就是一个局部组件(局部组件就是在使用之前需要通过模块化语法导入才能使用)
import App from "@/App";
import Bar from "@/components/Bar";
import Foo from "@/components/Foo";
// 通过createApp创建Vue3的应用实例app
// 应用实例具有很多常见的API（mount）
const app = createApp(App);
// 注册全局组件(必须要在app.mount执行之前)
app.component("Bar", Bar);
// 安装插件
app.use(Foo);
app._use = function (plugin) {
  // plugin要求(满足一项即可)：
  // 1.typeof plugin === function
  // 2.typeof plugin.install === function
  // this -> app
  if (typeof plugin === "function") {
    plugin(this);
  }
  if (typeof plugin.install === "function") {
    plugin.install(this);
  }
};

// app._use(Foo); // this -> app
// 将App组件渲染到页面上
app.mount("#app");
