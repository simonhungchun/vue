import { RouterView } from "vue-router";

export default {
  setup() {
    return () => (
      <>
        <h1>权限相关的页面</h1>
        <h6>登陆注册在本页面切换</h6>
        <div style={{ height: "300px", border: "1px solid red" }}>
          <RouterView />
        </div>
      </>
    );
  },
};
