// setup函数是所有组合式API的入口
// 所有你所学习到的组合式API都必须定义在setup函数体中（ref reactive watch watchEffect）
// setup函数的第一个参数就是props
// 组件的props属性需要在组件定义的对象中通过props配置项来提前声明才可以使用
export default {
  // 1.表示组件存在两个props属性分别是a和b
  // props: ["a", "b"],
  // 2.表示组件存在两个props属性分别是a和b,a必须是数字，b必须是字符串
  // props: {
  //   a: Number,
  //   b: String,
  // },
  // 3. 表示组件存在两个props属性分别是a和b,a是数字或数组，b必须是字符串
  // props: {
  //   a: [Number, Array],
  //   b: String,
  // },
  // 4. 墙裂推荐写法
  props: {
    a: {
      type: [Number, Array], // 类型
      required: false, // 是否必须传递
      default: 1111, // 如果不传的默认值
    },
    b: {
      type: String,
      required: true,
    },
    x: Number,
  },
  // 自定义事件的声明
  // emits: ["random"],
  emits: {
    // random: null,
    // 对给random事件传递的参数的约束
    random(payload) {
      return typeof payload === "number";
    },
  },
  setup(props, context) {
    // context组件上下文
    console.log("props:", props);
    // context.attrs 是组件的属性（没有在props中定义）
    console.log("attrs:", context.attrs);
    // context.slots 等价于 react中的props.children
    // 渲染组件的children 找到对应的slot函数执行就可以了(context.slots.default())
    console.log("children:", context.slots);
    // context.emit 触发组件标签上的自定义事件
    console.log("emit:", context.emit);
    return () => (
      <>
        <h1>Bar</h1>
        {context.slots.default()}
        <button
          onClick={() => {
            const r = Math.random();
            if (r > 0.7) {
              // context.attrs.onRandom(r);
              context.emit("random", r);
            }
          }}
        >
          触发random
        </button>
      </>
    );
  },
};
