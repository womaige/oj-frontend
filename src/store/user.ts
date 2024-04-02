// initial state
import { StoreOptions } from "vuex";
import AccessEnum from "@/access/accessEnum";
import { UserControllerService } from "../../generated";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录录",
    },
  }),

  actions: {
    /*这里是解构赋值的写法，把content中的部分对象拿出来匹配，也可以用这样的写法
                    actions: {
                        getLoginUser(context, payload) {
                          context.commit("updateUser", payload);
                     },
                }
                    */
    async getLoginUser({ commit, state }, payload) {
      const res = await UserControllerService.getLoginUser();
      console.log("res", res);
      if (res.code === 0) {
        commit("updateUser", res.data);
      } else {
        commit("updateUser", {
          ...state.loginUser,
          userRole: AccessEnum.NOT_LOGIN,
        });
      }
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
