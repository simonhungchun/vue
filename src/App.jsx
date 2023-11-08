import { RouterView } from "vue-router";
// import { onMounted } from "vue";
// import { createDynamicRoutes } from "./utils/dynamicRoutes";

export default {
  setup() {
    // onMounted(createDynamicRoutes);
    return () => <RouterView />;
  },
};
