export const asyncLoadComponent = (component_path) => {
  const _component_path = component_path.startsWith("views")
    ? component_path.replace(/^views/, "")
    : component_path.replace(/^/, "/");
  // webpack规定如果是动态引入的文件不得完全用变量表达（需要使用一个具体范围的固定的路径字符串（哪怕只有一部分都行）和动态变量路径拼接才可以动态导入）
  return import("@/views" + _component_path);
};
