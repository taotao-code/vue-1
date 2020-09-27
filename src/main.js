import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false
import "./assets/css/base.css";
import "./assets/js/font.js";
import "./assets/css/iconfont/iconfont.css";

//引入路由配置
import router from './plugins/router.js';

//引入拦截器
import "./plugins/axios";

import store from "./plugins/vuex";

import "./filters";


new Vue({
  render: h => h(App),
  router,
   store,
}).$mount('#app')

