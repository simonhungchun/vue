import { Button } from "ant-design-vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "B",
  setup() {
    // useRouter该组合式API的作用是：返回router的实例
    const router = useRouter();
    const route = useRoute();
    console.log("B route:", route.query);
    return () => (
      <div style="width: 100vw;height: 100vh;background: orange;overflow: hidden;">
        <Button onClick={() => router.push("/c/1111/618?a=1&b=2")}>
          函数式（To C）
        </Button>
        <br />
        <Button
          onClick={() =>
            router.push({ path: "/c/1111/618", query: { a: 1, b: 2 } })
          }
        >
          函数式（To C）
        </Button>
        <br />
        <Button
          onClick={() =>
            router.push({
              name: "C",
              params: { id: 1111, count: 618 },
              query: { a: 1, b: 2 },
            })
          }
        >
          函数式（To C）
        </Button>
        <h1>page B</h1>
      </div>
    );
  },
};
