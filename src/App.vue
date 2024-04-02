<template>
  <div id="app">
    <!--如果是/user开头的，那么就展示路由，如果不是就展示BasicLayout-->
    <template v-if="route.path.startsWith('/user')">
      <router-view></router-view>
    </template>
    <template v-else>
      <BasicLayout></BasicLayout>
    </template>
  </div>
</template>

<style></style>

<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { onMounted } from "vue";

/*全局初始化函数，有全局单次调用的代码，都可以写到这里*/
const doInit = () => {
  console.log("hello");
};
onMounted(() => {
  doInit();
});

const router = useRouter();
const store = useStore();
const route = useRoute();
router.beforeEach((to, from, next) => {
  if (to.meta?.access === "canAdmin") {
    if (store.state.user.loginUser?.role !== "admin") {
      next("/noAuthView");
      return;
    }
  }
  next();
});
</script>
