import { useRoute } from "vue-router";

export default {
  name: "C",
  setup() {
    // 获取当前所处的路由记录
    const route = useRoute();
    console.log("参数", route.params, route.query);
    return () => (
      <div style="width: 100vw;height: 100vh;background: teal;overflow: hidden;">
        <h1>page C</h1>
      </div>
    );
  },
};
