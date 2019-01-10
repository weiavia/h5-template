import '@/resource/style/common.scss'
import Vue from 'vue/dist/vue'
import App from './app'
import Router from 'vue-router'
import router from './router'

import { ToastPlugin, AlertPlugin } from 'vux'

Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(Router)

window.bus = new Vue()
window.vm = new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App }
})