<template lang="pug">
.max-w-6xl.mx-auto.bg-white.shadow-lg.rounded-lg.overflow-hidden.mt-16
  .px-4.py-2.border-b-2
    h1.text-gray-800.font-bold.text-2xl.uppercase {{$t("message")}}
    span.text-gray-500 (vue-pug,vuex.3,vue.2,vuex-helper,vue-composition-api)
      LocaleSwitcher
  form.w-full.max-w-sm.mx-auto.px-4.py-2
    .flex.items-center.border-b-2.border-teal-500.py-2
      input(class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1.px-2.leading-tight focus:outline-none" type="text", placeholder="Add a task" v-model="newTodo.title")
      button(class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" @click="addTodo(newTodo)").
        
        Add
        
  ul.divide-y.divide-gray-200.px-4
    li.py-4(v-for="todo in  myTodos" :key="todo.id")
      .flex.items-center
        label.ml-3.block.text-gray-900(for="todo1")
          span.text-lg.font-medium {{ todo.title }}
        button(@click="deleteTodo(todo.id)")
          delete-icon
</template>

<script>
import { onMounted, reactive } from "@vue/composition-api";
import { createNamespacedHelpers } from "vuex-composition-helpers";
import DeleteIcon from "./Icons/DeleteIcon";
import LocaleSwitcher from "./language/LocaleSwitcher";
const { useActions, useGetters } = createNamespacedHelpers("TodoList");
// import {
//   useState,
//   useNamespacedActions,
//   useNamespacedMutations,
// } from "vuex-composition-helpers";

export default {
  name: "ToDoList",
  components: {
    DeleteIcon,
    LocaleSwitcher,
  },
  setup() {
    const newTodo = reactive({
      title: "",
    });
    const { getTodos, addTodo, deleteTodo } = useActions([
      "getTodos",
      "addTodo",
      "deleteTodo",
    ]);
    const { myTodos } = useGetters(["myTodos"]);

    onMounted(() => {
      getTodos();
      console.log(myTodos);
    });

    return {
      myTodos,
      newTodo,
      addTodo,
      deleteTodo,
    };
  },
};
</script>
