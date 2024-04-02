/*
 * 检查权限，判断当前用户是否具有某个权限
 * */
import AccessEnum from "@/access/accessEnum";
import ACCESS_ENUM from "@/access/accessEnum";

const checkAccess = (loginUser: any, needAccess = AccessEnum.NOT_LOGIN) => {
  /*如果用户未登录，给用户一个默认的值*/
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  /*如果不需要登录，直接返回true*/
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  /*如果需要的权限是用户*/
  if (needAccess === AccessEnum.USER) {
    /*只要登录就好了*/
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }

  if (needAccess === ACCESS_ENUM.ADMIN) {
    /*如果不为管理员就表示无权限*/
    if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
      return false;
    }
  }
  return true;
};

export default checkAccess;
