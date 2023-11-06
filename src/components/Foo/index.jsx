import { ref, onMounted, reactive, computed } from "vue";
// import { Button } from "ant-design-vue";
// ref如何获取元素
// computed 缓存运算结果 减少运算次数
const Foo = {
  setup(props, context) {
    const data = reactive({
      a: 618,
      b: 1111,
    });
    const sum1 = () => {
      console.log("sum1执行了....");
      return data.a + data.b;
    };
    const sum2 = computed(() => {
      console.log("sum2执行了....");
      return data.a + data.b;
    });
    const h1 = ref(null);
    const count = ref(1111);
    // context.expose() 对外暴露组件内部的数据的
    context.expose({ count });
    // onMounted 组件挂载完成之后注册的回调
    onMounted(() => console.log(h1.value));
    return () => (
      <div>
        <h1 ref={h1}>Foo</h1>
        <p>a+b的结果：</p>
        {/* <h3>{data.a + data.b}</h3> */}
        <h4>{sum1()}</h4>
        <h4>{sum1()}</h4>
        <h4>{sum1()}</h4>
        <h4>{sum2.value}</h4>
        <h4>{sum2.value}</h4>
        <h4>{sum2.value}</h4>
        <button onClick={() => (data.a += 10)}>change A</button>
        <button onClick={() => (data.b *= 10)}>change B</button>
        <A-Button>按钮</A-Button>
      </div>
    );
  },
};
export default (app) => app.component("Foo", Foo);
