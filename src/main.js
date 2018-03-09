import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/less/index.less'
import 'font-awesome/css/font-awesome.min.css'




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
