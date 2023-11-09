import Vuex from "vuex";
import Vue from "vue";
import Testing from "./modules/Testing";
import TodoList from "./modules/TodoList";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TodoList,
    Testing,
  },
});
