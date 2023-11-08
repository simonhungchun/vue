import storejs from "storejs";
// todo: 待你目录结构整理好后 解开注释
import { asyncLoadComponent } from "@/utils/asyncLoadComponent";
const user_menus_list = storejs.get("user_menus");
export const buildRoutes = (
  user_menus = user_menus_list,
  parent_id = 0,
  children = []
) => {
  user_menus.forEach?.((item) => {
    if (item.parent_id === parent_id)
      children.push({
        ...item,
        // todo: 待你目录结构整理好后 解开注释
        component: asyncLoadComponent(item.component),
        children: buildRoutes(user_menus, item.id),
      });
  });
  return children;
};

// 通过

/*
 @/views/Layout
 @/views/EmptyLayout
 @/views/index/index
 @/views/projectManagement/projectList/index
 @/views/projectManagement/projectTemplate/index
 @/views/projectManagement/messageManagement/index
 @/views/projectManagement/project/index
 @/views/departmentManagement/index
 @/views/personalCenter/index
 @/views/invite/ProjectInvite
*/
