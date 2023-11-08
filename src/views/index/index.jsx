import { RouterView } from "vue-router";

export default {
  setup() {
    return () => (
      <>
        <h1>Auth</h1>
        <RouterView />
      </>
    );
  },
};
