<template>
  <div>
    <div>counter: {{ store.counter }}</div>
    <div>name: {{ store.name }}</div>
    <div>isAdmin: {{ store.isAdmin }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useExample1Store } from "@/stores/example1";
export default defineComponent({
  name: "Example1View",
  setup() {
    const store = useExample1Store();
    return {
      store,
    };
  },
});
</script>
