import { RouterView } from "vue-router";

export default {
  setup() {
    return () => (
      <div>
        <h1>Auth</h1>
        <RouterView />
      </div>
    );
  },
};
