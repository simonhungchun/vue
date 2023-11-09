import storejs from "storejs";
// 将路径转换为一个异步加载的组件！
import { asyncLoadComponent } from "@/utils/asyncLoadComponent";
const user_menus_list = storejs.get("user_menus"); // undefined
console.log(user_menus_list);
// 为什么定义buildRoutes函数
// 在一个数组集合中把具有指定属性值的对象找出来
// function findItem(source, target) {
//   let res = [
//     // {
//     //   id: 1,
//     //   name: "layout",
//     //   path: "/",
//     //   parent_id: 0,
//     //   icon: "el-icon-monitor",
//     //   title: "工作台",
//     //   hidden: 0,
//     // },
//   ];
//   for (let i = 0; i < source.length; i++) {
//     if (source[i].parent_id === target) {
//       res.push({ ...source[i], component: asyncLoadComponent(source[i].component), children: findItem(source, source[i]) });
//     }
//   }
//   return res;
// }
// console.log(findItem(user_menus_list, 0));
export const buildRoutes = (
  user_menus = user_menus_list,
  parent_id = 0,
  children = []
) => {
  console.log(user_menus);
  user_menus?.forEach?.((item) => {
    if (item.parent_id === parent_id)
      children.push({
        meta: item,
        path: item.path,
        name: item.name,
        component: asyncLoadComponent(item.component),
        children: buildRoutes(user_menus, item.id),
      });
  });
  return children;
};
