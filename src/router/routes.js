export default [
  { path: "/", redirect: "/auth" },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/Auth"),
    children: [
      { path: "", redirect: "/auth/login" },
      {
        path: "login",
        name: "login",
        component: () => import("@/views/Auth/Login"),
      },
      {
        path: "register",
        name: "register",
        component: () => import("@/views/Auth/Register"),
      },
    ],
  },
];

// 扁平化数据转树状结构
// const list = [
//   { id: 1, path: "/a", name: "a", component: "A", pid: 0 },
//   { id: 2, path: "/b", name: "b", component: "B", pid: 0 },
//   { id: 3, path: "/c", name: "c", component: "C", pid: 0 },
//   { id: 4, path: "d", name: "d", component: "D", pid: 1 },
//   { id: 5, path: "e", name: "e", component: "E", pid: 1 },
//   { id: 6, path: "f", name: "f", component: "F", pid: 5 },
//   { id: 7, path: "g", name: "g", component: "G", pid: 4 },
//   { id: 8, path: "h", name: "h", component: "H", pid: 3 },
// ];
// function list2tree(list, pid = 0, res = []) {
//   for (let i = 0; i < list.length; i++) {
//     if (list[i].pid === pid) {
//       res.push({ ...list[i], children: list2tree(list, list[i].id) });
//     }
//   }
//   return res;
// }
// const list_res = list2tree(list);
// console.log(list_res);
// const list_res = [
//   {
//     id: 1,
//     path: "/a",
//     name: "a",
//     component: "A",
//     pid: 0,
//     children: [
//       {
//         id: 4,
//         path: "/a/d",
//         name: "d",
//         component: "D",
//         pid: 1,
//         children: [{ id: 7, path: "g", name: "g", component: "G", pid: 4 }],
//       },
//       {
//         id: 5,
//         path: "/a/e",
//         name: "e",
//         component: "E",
//         pid: 1,
//         children: [{ id: 6, path: "f", name: "f", component: "F", pid: 5 }],
//       },
//     ],
//   },
//   { id: 2, path: "/b", name: "b", component: "B", pid: 0, children: [] },
//   {
//     id: 3,
//     path: "/c",
//     name: "c",
//     component: "C",
//     pid: 0,
//     children: [
//       { id: 8, path: "/c/h", name: "h", component: "H", pid: 3, children: [] },
//     ],
//   },
// ];

// console.log(list, list_res);
