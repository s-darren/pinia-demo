import { defineStore } from "pinia";

export const useExample1Store = defineStore("example1", {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      counter: 0,
      name: "Eduardo",
      isAdmin: true,
    };
  },
  getters: {
    getterCounter(state) {
      return state.counter * 2;
    },
    // 返回类型必须明确设置
    doublePlusOne(): number {
      return this.counter * 2 + 1;
    },
  },
  actions: {
    increment() {
      this.counter++;
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random());
    },
    async asyncAction() {
      this.counter = await new Promise((resolve) => {
        console.log("start asyncAction");
        setTimeout(() => {
          console.log("finish asyncAction");
          resolve(100);
        }, 3000);
      });
    },
  },
});
