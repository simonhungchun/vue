<template>
  <div class="bg">
    <h1>模版语法</h1>
    <input type="text" :value="data.username" @input="inputHandle" />
    <input type="text" v-model="data.username" />
    <button @click="fn">查看username</button>
  </div>
</template>
<script setup>
// 自动将<script setup>中定义的变量全部返回
// 只能使用组合式API
import { reactive } from "vue";
const data = reactive({
  username: "shenhongchun",
});
const inputHandle = (e) => (data.username = e.target.value);
const fn = () => console.log(data.username);
</script>
<style lang="scss">
.bg {
  background-color: red;
  color: wheat;
}
</style>
