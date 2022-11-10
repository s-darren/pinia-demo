<template>
  <div>
    <div>counter: {{ store.counter }}</div>
    <div>getterCounter: {{ store.getterCounter }}</div>
    <div>doublePlusOne: {{ store.doublePlusOne }}</div>
  </div>
  <div>
    <a-space>
      <a-button @click="changeCounterFromDirect">直接改变counter</a-button>
      <a-button @click="store.increment">increment</a-button>
      <a-button @click="store.randomizeCounter">randomizeCounter</a-button>
      <a-button @click="store.asyncAction">asyncAction</a-button>
      <a-button @click="reset">重置store</a-button>
    </a-space>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useExample1Store } from "@/stores/example1";
export default defineComponent({
  name: "Example4View",
  setup() {
    const store = useExample1Store();
    store.$subscribe((mutation, state) => {
      console.log("mutation", mutation);
      console.log("state", state);
    });
    store.$onAction(
      ({
        name, // action 的名字
        store, // store 实例
        args, // 调用这个 action 的参数
        after, // 在这个 action 执行完毕之后，执行这个函数
        onError, // 在这个 action 抛出异常的时候，执行这个函数
      }) => {
        // 记录开始的时间变量
        const startTime = Date.now();
        // 这将在 `store` 上的操作执行之前触发
        console.log(`Start "${name}" with params [${args.join(", ")}].`);

        // 如果 action 成功并且完全运行后，after 将触发。
        // 它将等待任何返回的 promise
        after((result) => {
          console.log(
            `Finished "${name}" after ${
              Date.now() - startTime
            }ms.\nResult: ${result}.`
          );
        });

        // 如果 action 抛出或返回 Promise.reject ，onError 将触发
        onError((error) => {
          console.warn(
            `Failed "${name}" after ${
              Date.now() - startTime
            }ms.\nError: ${error}.`
          );
        });
      }
    );
    return {
      store,
    };
  },
  methods: {
    changeCounterFromDirect() {
      this.store.counter++;
    },
    reset() {
      this.store.$reset();
    },
  },
});
</script>
