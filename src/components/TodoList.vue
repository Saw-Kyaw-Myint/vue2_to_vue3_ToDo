<template lang="pug">
.max-w-md.mx-auto.bg-white.shadow-lg.rounded-lg.overflow-hidden.mt-16
  .px-4.py-2.border-b-2
    h1.text-gray-800.font-bold.text-2xl.uppercase To-Do List 
    span.text-gray-500 (vue-pug,vuex.3,vue.2,vuex-helper,vue-composition-api)
  form.w-full.max-w-sm.mx-auto.px-4.py-2
    .flex.items-center.border-b-2.border-teal-500.py-2
      input(class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1.px-2.leading-tight focus:outline-none" type="text", placeholder="Add a task")
      button(class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button").
        
        Add
        
  ul.divide-y.divide-gray-200.px-4
    li.py-4
      .flex.items-center
        input#todo1(class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" name="todo1", type="checkbox")
        label.ml-3.block.text-gray-900(for="todo1")
          span.text-lg.font-medium Finish project proposal
          span.text-sm.font-light.text-gray-500.ml-2 Due on 4/1/23
    li.py-4
      .flex.items-center
        input#todo2(class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" name="todo2", type="checkbox")
        label.ml-3.block.text-gray-900(for="todo2")
          span.text-lg.font-medium Buy groceries
          span.text-sm.font-light.text-gray-500.ml-2 Bananas, milk, bread
    li.py-4
      .flex.items-center
        input#todo3(class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" name="todo3", type="checkbox")
        label.ml-3.block.text-gray-900(for="todo3")
          span.text-lg.font-medium Go for a run
          span.text-sm.font-light.text-gray-500.ml-2 3 miles
</template>

<script>
export default {
  name: "ToDoList",
};
</script>
