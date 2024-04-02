//引入createApp用来创建应用
import { createApp } from "vue";
//引入根组件
import App from "./App.vue";
//引入路由
import router from "./router";
import store from "./store";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import "@/access";
import "bytemd/dist/index.css";

//在外面terminal中下载的依赖，需要在main.ts中导入进来，比如下载了bytemd的markdown编辑器，需要在这里import进来
//引用一个组件通常不将代码复制到一个页面中，而是在组件component中新建一个，如这里的MdEditor,这应该就是组件的作用，可以复用且解耦？
//这里需要创建vue实例，将APP作为了根组件，并将实例挂载在id为app的标签上
createApp(App).use(store).use(router).use(ArcoVue).mount("#app");
