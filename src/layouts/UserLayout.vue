<template>
  <div id="UserLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img src="../assets/logo.png" class="logo" />
          <div>OJ判题系统</div>
        </a-space>
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
#UserLayout {
  text-align: center;
  background: url("https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png");
}

#UserLayout .logo {
  width: 64px;
  height: 64px;
}

#UserLayout .header {
  //background: bisque;
  margin-bottom: 16px;
  //box-shadow: #eee 1px 1px 5px;
}

#UserLayout .content {
  margin-bottom: 16px;
  padding: 20px;
}

#UserLayout .footer {
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>

<script setup lang="ts"></script>
