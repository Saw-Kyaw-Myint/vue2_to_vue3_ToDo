<template>
  <div id="app">
    <!-- //example -->
    <!-- <div class="max-w-6xl mx-auto mt-10 bg-white shadow p-7 border rounded">
      <HelloWorld
        msg="Welcome to Your Vue.js App"
        id="example"
        class="custom-class"
        data-custom="custom-value"
        customProp="Custom Prop Value"
      >
        <div>Slot Example</div>
      </HelloWorld>
    </div> -->

    <!-- ToDoList  -->
    <ToDoList />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import ToDoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    ToDoList,
  },
};
</script>
