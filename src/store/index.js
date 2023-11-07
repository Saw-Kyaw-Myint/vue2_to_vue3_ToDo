import Vuex from "vuex";
import Vue from "vue";
import Testing from "./modules/Testing";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    testing: Testing,
  },
});
