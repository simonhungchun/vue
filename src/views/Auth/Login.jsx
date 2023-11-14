import { reactive } from "vue";
import {
  Form,
  FormItem,
  Input,
  InputPassword,
  Button,
  Checkbox,
} from "ant-design-vue";
import { useRouter } from "vue-router";
import { useUser } from "@/store/user";

export default {
  setup() {
    // 不能对user（reactive）解构 会失去响应式
    const user = useUser();
    const router = useRouter();
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
          onFinish={user.userLogin}
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
