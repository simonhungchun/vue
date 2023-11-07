export const asyncLoadComponent = (compoent_path) => {
  return import("@/views" + compoent_path.replace(/^views/, ""));
};
