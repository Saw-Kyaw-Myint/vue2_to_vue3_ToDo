<template lang="pug">
.max-w-6xl.mx-auto.bg-white.shadow-lg.rounded-lg.overflow-hidden.mt-16.border.border-teal-300
  .px-4.py-2.border-b.border-teal-200
    .flex.items-center.justify-between
      div
        h1.font-bold.text-2xl.uppercase {{$t("todoList")}}
        span.text-gray-400 (vue-pug,vuex.3,vue.2,vuex-helper,vue-composition-api,vue-i18n)
      LocaleSwitcher
  div.w-full.max-w-sm.mx-auto.px-4.py-2
    .flex.items-center.border-b-2.border-teal-500.py-2
      input(class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1.px-2.leading-tight focus:outline-none" type="text", :placeholder="$t('placeholder')" v-model="newTodo.title")
      button(class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" @click="addTodoItem(newTodo)").
        
        {{ $t('add') }}
        
  ul.px-4.flex.flex-wrap.mt-4
    li.py-4(v-for="todo in  myTodos" :key="todo.id" class="w-1/3 p-3")
      .p-3.rounded.bg-white.shadow-md.border
        .flex.flex-row-reverse
          button(@click="deleteTodo(todo.id)")
            delete-icon
        label.ml-3.block.text-gray-900(for="todo1")
          span.text-lg.font-medium {{ todo.title }}
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
    const addTodoItem = (newTodo) => {
      addTodo(newTodo);
      newTodo.title = "";
    };

    onMounted(() => {
      getTodos();
      console.log(myTodos);
    });

    return {
      myTodos,
      newTodo,
      addTodo,
      addTodoItem,
      deleteTodo,
    };
  },
};
</script>
