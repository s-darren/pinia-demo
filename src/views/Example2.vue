<template>
  <div>
    <div>counter: {{ store.counter }}</div>
    <div>computedCounter: {{ computedCounter }}</div>
    <div>name: {{ store.name }}</div>
    <div>isAdmin: {{ store.isAdmin }}</div>
  </div>
  <div>
    <a-space>
      <a-button @click="changeCounterFromDirect">直接改变counter</a-button>
      <a-button @click="changeFromPatch">通过$patch一次改变多个属性</a-button>
      <a-button @click="changeFromPatchFunction">
        通过$patch一次改变多个属性(Function)
      </a-button>
      <a-button @click="replaceState">替换state</a-button>
      <a-button @click="reset">重置store</a-button>
    </a-space>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useExample1Store } from "@/stores/example1";
export default defineComponent({
  name: "Example2View",
  setup() {
    const store = useExample1Store();
    const computedCounter = computed(() => store.counter * 3);
    store.$subscribe((mutation, state) => {
      console.log("mutation", mutation);
      console.log("state", state);
    });
    return {
      store,
      computedCounter,
    };
  },
  methods: {
    changeCounterFromDirect() {
      this.store.counter++;
    },
    changeFromPatch() {
      this.store.$patch({
        counter: this.store.counter + 1,
        name: "Abalam",
      });
    },
    changeFromPatchFunction() {
      this.store.$patch((state) => {
        state.counter = state.counter + 1;
        state.isAdmin = !state.isAdmin;
      });
    },
    reset() {
      this.store.$reset();
    },
    replaceState() {
      this.store.$state = { counter: 666, name: "Paimon", isAdmin: false };
    },
  },
});
</script>
