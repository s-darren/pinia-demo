<template>
  <div>
    <div>counter: {{ store.counter }}</div>
    <div>getterCounter: {{ store.getterCounter }}</div>
    <div>doublePlusOne: {{ store.doublePlusOne }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useExample1Store } from "@/stores/example1";
export default defineComponent({
  name: "Example3View",
  setup() {
    const store = useExample1Store();
    return {
      store,
    };
  },
});
</script>
