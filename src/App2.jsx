import axios from "axios";
import { ref, watch } from "vue";

export default {
  setup() {
    const count = ref(0);
    const svg = ref("");
    const bar = ref({
      a: {
        b: {
          c: {
            d: 123,
          },
        },
      },
    });
    // 初始化执行一次 自动收集依赖 依赖变化再次执行
    // const stop = watchEffect(() => console.log(count.value));
    // watchEffect(() => {
    //   console.log(count.value);
    //   axios.get("/admin/verifycode").then((res) => {
    //     svg.value = res.data.data.svg;
    //   });
    // });
    const stop = watch(
      [count, bar],
      async () => {
        const res = await axios.get("/admin/verifycode");
        svg.value = res.data.data.svg;
      },
      {
        immediate: true,
        deep: true,
      }
    );

    // const res = await axios.get("/admin/verifycode");
    // svg.value = res.data.data.svg;
    return () => (
      <div>
        <h1>App2</h1>
        <h2>count:{count.value}</h2>
        <button onClick={() => count.value++}>修改count值</button>
        <button onClick={stop}>停止监听</button>
        <div v-html={svg.value}></div>
        <button onClick={() => bar.value.a.b.c.d++}>
          修改深层次嵌套数据{bar.value.a.b.c.d}
        </button>
      </div>
    );
  },
};
