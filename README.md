# JSX 和 Template 语法的区别

## 元素绑定属性和绑定内容

### JSX

```jsx
const a = "foo";
const style = { width: "100px", height: "100px" };
const msg = "hello,jsx!";
const el = (
  <div id={a} style={style}>
    {msg}
  </div>
);
```

### Template

```vue
<template>
  <div v-bind:id="a" v-bind:style="style">{{ msg }}</div>
  <div :id="a" :style="style">{{ msg }}</div>
</template>
<script setup>
const a = "foo";
const style = { width: "100px", height: "100px" };
const msg = "hello,jsx!";
</script>
```

## 元素绑定事件

```jsx
const fn = () => console.log("事件绑定！");
export default {
  setup() {
    return () => <div onClick={fn}></div>;
  },
};
```

```vue
<template>
  <div v-on:click="fn"></div>
  <div @click="fn"></div>
</template>
<script setup>
const fn = () => console.log("事件绑定！");
</script>
```

## 双向数据绑定

_(one data binding)数据变化视图更新(非受控组件)_
_(two data binding)数据变化视图更新 视图更新也会导致数据更新(受控组件)_

```jsx
// 双向数据绑定/受控组件
import {ref} from "vue";
export default {
  const val = ref("1234");
  setup() {
    return () => <input value={val.value} onInput={(e) => (val.value = e.target.value)}/>
  }
}
```

```vue
<template>
  <input v-model="val" />
</template>
<script setup>
import { ref } from "vue";
const val = ref("1234");
</script>
```
