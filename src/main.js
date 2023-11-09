import Vue from "vue";
import App from "./App.vue";
import VueCompositionAPI from "@vue/composition-api";
import store from "./store/index";
import "./style.css";
import i18n from './i18n'

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);

new Vue({
  store,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
