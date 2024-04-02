import { createRouter, createWebHistory } from "vue-router";

import { routes } from "@/router/routes";

// router是路由器，路由器是管理路由的，routes就是在routes.ts中定义的那么多路由规则
const router = createRouter({
  //在vue3中，必须指定路由器的工作模式，这是固定写法
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
//写完要将配置暴露出去
export default router;
