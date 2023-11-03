// todo: 如何定义一个vue组件
// todo: 如何使用响应式数据
// 在vue的jsx语法中 渲染页面的关键在于
// setup函数的返回值是一个返回jsx元素的函数
// 相当于把react中的组件函数 放入一个对象的setup属性的返回值中
import { reactive } from "vue";
// 响应式数据：该数据和使用数据的HTML标签捆绑在一起，只要数据发生改变则对应的HTML发生重新渲染
// 定义响应式数据的API：ref、reactive
// 需要使用响应式API的前提：当前数据修改后视图需要更新
// ❌ 简单数据类型使用ref 引用数据类型reactive ❌
// ref的实现（基于reactive）
function ref(initalValue) {
  return reactive({
    value: initalValue,
  });
}

export default {
  setup() {
    const data = reactive({
      count: 0,
      index: 0,
    });
    const count = ref(0);
    // const count = reactive({value: 0})
    const index = ref(0);
    return () => (
      <>
        <h1>count:{count.value}</h1>
        <h1>index:{index.value}</h1>
        <button onClick={() => count.value++}>increase</button>
        <hr />
        <h1>count:{data.count}</h1>
        <h1>index:{data.index}</h1>
        <button onClick={() => data.count++}>increase</button>
      </>
    );
  },
};
