import Vue from "vue";
import App from "./App.vue";
import VueCompositionAPI from "@vue/composition-api";
import store from "./store/index";
import "./style.css";

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
