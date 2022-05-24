import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import { BootstrapVueIcons, BootstrapVue } from "bootstrap-vue";
import VueForm from "vue-form";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueForm);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
