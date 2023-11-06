import { createRouter, createWebHistory } from "vue-router";
import A from "@/views/A";
import B from "@/views/B";
import C from "@/views/C";
import Auth from "@/views/Auth";
import Login from "@/views/Auth/children/Login";
import Register from "@/views/Auth/children/Register";
import NotFound from "@/views/NotFound";
// cteateRouter接受一个参数对象
// 其中属性history的值为函数的返回值
// 哈希模式： createWebHashHistory()
// 历史记录模式： createWebHistory()
const router = createRouter({
  // 设置路由模式
  // hash模式和history模式它们的区别是什么？
  // 使用历史记录模式的问题是什么？如何解决？
  history: createWebHistory(),
  // name一定是唯一的不重复的！！！
  routes: [
    { path: "/", redirect: "/a" },
    { path: "/a", name: "A", component: A },
    { path: "/b", name: "B", component: B },
    { path: "/c/:id/:count", name: "C", component: C },
    {
      path: "/auth",
      name: "Auth",
      component: Auth,
      children: [
        { path: "", redirect: "/auth/login" },
        { path: "login", component: Login },
        { path: "register", name: "Reg", component: Register },
      ],
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});
// 路由的本质就是 路径(path) 与 组件(component)的对应关系
// router作为vue的插件导出的！
// Outlet(RouterView)
console.log(router);
export default router;
// 路由跳转（两种）：
// 1.声明式导航（跳转） <RouterLink/>
// 2.函数式导航（跳转） const router = useRouter(); router.push("")

// 参数传递（两种）：
// 1.params （形如：/path/:key1/:key2/...） =>  useRoute().params 注意提前在路由定义的path中去声明
// 2.query  （形如：/path?key1=x&key2=y...）=>  useRoute().query
