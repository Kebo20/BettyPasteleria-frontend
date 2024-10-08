import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"
import "./assets/app.css"
import axios from "./Config/axios";

Vue.use(Antd)
Vue.config.productionTip = false
axios.defaults.headers.common["Authorization"] = "Bearer " + store.state.token;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
