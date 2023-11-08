import { reactive } from "vue";
import { useRequest } from "vue-request";
import {
  Form,
  FormItem,
  Input,
  InputPassword,
  Button,
  Checkbox,
  message,
} from "ant-design-vue";
import storejs from "storejs";
import { useRouter } from "vue-router";
import { login, user_info, user_menus } from "@/api";
// import { buildRoutes } from "@/utils/buildRoutes";
import { createDynamicRoutes } from "@/utils/dynamicRoutes";
// import router from "@/router";

export default {
  setup() {
    const router = useRouter();
    const { run: onLoginedCallback } = useRequest(
      () => Promise.all([user_info(), user_menus()]),
      {
        manual: true,
        onSuccess([user_info, user_menus]) {
          storejs.set("user_info", user_info);
          storejs.set("user_menus", user_menus);
          createDynamicRoutes();
          // console.log(buildRoutes());
          // router.replace("/home");
        },
      }
    );
    const { run: onFinish } = useRequest(login, {
      manual: true,
      onSuccess(auth) {
        storejs.set("auth", auth);
        onLoginedCallback();
        message.success("登陆成功！");
      },
    });

    const formState = reactive({
      username: "",
      password: "",
      remember: true,
    });
    return () => (
      <div>
        <Button onClick={() => router.push("/")}>跳转</Button>
        <h1>登陆</h1>
        <Form
          model={formState}
          name="basic"
          label-col={{ span: 8 }}
          wrapper-col={{ span: 16 }}
          autocomplete="off"
          onFinish={onFinish}
        >
          <FormItem
            label="用户名"
            name="username"
            rules={[{ required: true, message: "请输入合法用户名!" }]}
          >
            <Input
              value={formState.username}
              onInput={(e) => (formState.username = e.target.value)}
            />
          </FormItem>
          <FormItem
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入合法密码!" }]}
          >
            <InputPassword v-model:value={formState.password} />
          </FormItem>
          <FormItem name="remember" wrapper-col={{ offset: 8, span: 16 }}>
            <Checkbox v-model:checked={formState.remember}>记住密码</Checkbox>
          </FormItem>
          <FormItem wrapper-col={{ offset: 8, span: 16 }}>
            <Button type="primary" html-type="submit">
              提交
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  },
};
