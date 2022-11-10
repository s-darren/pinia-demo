<template>
  <div class="home">
    <a-tabs v-model:activeKey="activeKey" destroyInactiveTabPane>
      <a-tab-pane key="1" tab="store1-1"><example1 /></a-tab-pane>
      <a-tab-pane key="2" tab="store1-2"><example2 /></a-tab-pane>
      <a-tab-pane key="3" tab="getters1"><example3 /></a-tab-pane>
      <a-tab-pane key="4" tab="actions1"><example4 /></a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Example1 from "./Example1.vue";
import Example2 from "./Example2.vue";
import Example3 from "./Example3.vue";
import Example4 from "./Example4.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    Example1,
    Example2,
    Example3,
    Example4,
  },
  setup() {
    return {
      activeKey: ref("1"),
    };
  },
});
</script>
