import { RouterLink, useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    return () => (
      <>
        <h1>登陆</h1>
        <h6>
          还没有账号，<RouterLink to="/auth/register">去注册</RouterLink>
        </h6>
        <h6>
          还没有账号，<RouterLink to="./register">去注册</RouterLink>
        </h6>
        <h6>
          还没有账号，
          <strong onClick={() => router.push({ name: "Reg" })}>去注册</strong>
        </h6>
      </>
    );
  },
};
