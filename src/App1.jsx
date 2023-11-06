import { ref, onMounted } from "vue";
import Head from "./components/Head.vue";

export default {
  setup() {
    const foo = ref(null);
    onMounted(() => {
      console.log("foo.value.count:", foo.value.count);
    });
    return () => (
      <div>
        <ARadio />
        <Head />
        <h1>App</h1>
        {/* 使用属性去表达自定义事件random */}
        <Bar b="2" x={1} y={2} onRandom={(e) => console.log("e:", e)}>
          <h2>bar.children</h2>
        </Bar>
        <Foo ref={foo} />
      </div>
    );
  },
};
