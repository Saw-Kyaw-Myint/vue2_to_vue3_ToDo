<template>
  <div id="app">
    <div class="max-w-6xl mx-auto mt-10 bg-white shadow p-7 border rounded">
      <HelloWorld
        msg="Welcome to Your Vue.js App"
        id="example"
        class="custom-class"
        data-custom="custom-value"
        customProp="Custom Prop Value"
      >
        <div>Slot Example</div>
      </HelloWorld>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
