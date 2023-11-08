export const asyncLoadComponent = (component_path) => {
  const _component_path = component_path.startsWith("views")
    ? component_path.replace(/^views/, "")
    : component_path.replace(/^/, "/");
  return import("@/views" + _component_path);
};
