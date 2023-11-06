import { RouterLink } from "vue-router";

export default {
  name: "A",
  setup() {
    return () => (
      <div style="width: 100vw;height: 100vh;background: pink;overflow: hidden;">
        <RouterLink to="/b?id=abc&index=10">声明式（To B）</RouterLink>
        <br />
        <RouterLink to={{ path: "/b", query: { id: "abc", index: 10 } }}>
          声明式（To B）
        </RouterLink>
        <br />
        <RouterLink to={{ name: "B", query: { id: "abc", index: 10 } }}>
          声明式（To B）
        </RouterLink>
        <h1>page A</h1>
      </div>
    );
  },
};
