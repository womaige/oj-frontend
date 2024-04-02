import router from "@/router";
import store from "@/store";
import ACCESS_ENUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  const loginUser = store.state.user.loginUser;

  /*这个loginUser始终是不为空的*/
  if (!loginUser || !loginUser.userRole) {
    /*加await是为了等登录完成以后再执行其它操作*/
    await store.dispatch("user/getLoginUser");
  }
  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;
  /*要跳转的页面需要登录*/
  if (needAccess != ACCESS_ENUM.NOT_LOGIN) {
    //如果没登录，跳转到登录页面
    if (!loginUser || !loginUser.userRole) {
      next(`user/login?redirect=${to.fullPath}`);
      return;
    }
  }
  /*如何已经登录了，但是权限不足，那么跳转到无权限页面*/
  if (!checkAccess(loginUser, needAccess)) {
    next("/noAuth");
    return;
  }
  // if (to.meta?.access === "canAdmin") {
  //   if (store.state.user.loginUser?.role !== "admin") {
  //     next("/noAuthView");
  //     return;
  //   }
  // }
  next();
});
