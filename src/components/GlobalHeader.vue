<template>
  <a-row id="globalHeader" class="grid-demo" align="center">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
        <!-- 在Vue中，如果你想绑定一个方法到组件的事件上，你需要使用 v-on 指令或其缩写 @ -->
        <!-- 绑定了这个事件以后，点击的时候会传递出来一个string类型的key，然后执行doMenuClick方法，里面的逻辑是路由到指定的界面 -->

        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-img">
            <img class="logo" src="../assets/logo.png" />
            <div class="title">在线算法练习平台</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in visibleRoutes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>
        {{ store.state.user?.loginUser?.userName ?? "未登录" }}
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
/*这里是否是使用{}是有区别的*/
import { routes } from "@/router/routes";
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
import AccessEnum from "@/access/accessEnum";

/*使用 useRouter 当你需要操作路由（如导航到一个新的页面）。
使用 useRoute 当你需要访问当前路由的信息（如获取当前路径或查询参数）。*/
const router = useRouter();

const store = useStore();

/*是数组就都有这个filter方法的
 * 这三个参数分别代表：item表示第一个数组的元素，index表示这个元素的索引，array表示这个数组的集合
 * 这里visibleRoute依赖的值发生变化时，就会重新computed
 * */
const visibleRoutes = computed(() => {
  return routes.filter((item, index, array) => {
    /*？是可选链操作符,一种安全访问的方式，不会抛出异常*/
    if (item.meta?.hideInMenu) {
      return false;
    }
    /*根据权限过滤菜单*/
    if (
      !checkAccess(store.state.user.loginUser, item?.meta?.access as string)
    ) {
      console.log("access", item?.meta?.access);
      return false;
    }
    return true;
  });
});

const selectedKeys = ref(["/"]);

/*可以从后端获得的数据*/
const payload = {
  userName: "我迈哥gege",
  userRole: AccessEnum.ADMIN,
};

/*首先点击菜单栏=> 调整更新路由=> 更新路由后，同步更新菜单栏的高亮状态*/
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};

/*
store.dispatch('actionName', payload)
actionName 是字符串，表示要触发的 action 名称; payload 是可选参数，表示传递给 action 的数据。
*/
setTimeout(() => {
  store.dispatch("user/getLoginUser", payload);
}, 3000);
</script>

<style scoped>
.title-img {
  display: flex;
  align-items: center;
}

.logo {
  height: 48px;
}

.title {
  margin-left: 14px;
  color: #444;
}
</style>
