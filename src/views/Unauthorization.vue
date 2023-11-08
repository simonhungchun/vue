<template>
  <div>
    <img src="/resource/401.png" alt="" />
    <Button @click="() => router.push('/auth/login')"
      >去登陆({{ duration }})</Button
    >
  </div>
</template>
<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { Button } from "ant-design-vue";
import { useRouter } from "vue-router";
const router = useRouter();
const duration = ref(10);
let timer = null;
onMounted(() => {
  timer = setInterval(() => {
    if (--duration.value <= 0) {
      router.push("/auth/login");
      clearInterval(timer);
    }
  }, 1000);
});
onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>
