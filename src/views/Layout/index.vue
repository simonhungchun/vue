<template>
  <div style="background-color: #fff">
    username: {{ user.userInfo.username }}
  </div>
</template>
<script setup>
// useUser 必须在setup中使用
import { useUser } from "@/store/user";
const user = useUser();
console.log("user", user);
console.log("layout ...");
</script>
