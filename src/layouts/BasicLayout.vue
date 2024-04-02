<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader></GlobalHeader>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">OJ判题系统 by BIGC</a-layout-footer>
    </a-layout>
  </div>
</template>
<!--scoped目的是让<style>标签中的CSS样式只应用于其父元素及其子元素，而不是整个文档-->
<style scoped>
# basicLayout {
}

#basicLayout .header {
  //background: bisque;
  margin-bottom: 16px;
  //box-shadow: #eee 1px 1px 5px;
}

#basicLayout .content {
  background: aqua;
  margin-bottom: 16px;
  padding: 20px;
}

#basicLayout .footer {
  background: beige;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>

<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
