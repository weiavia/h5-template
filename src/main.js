import '@/resource/style/common.scss'
import Vue from 'vue/dist/vue'
import App from './app'

import { ToastPlugin, AlertPlugin } from 'vux'

Vue.use(ToastPlugin)
Vue.use(AlertPlugin)

const myname = 'liaowei'

window.vm = new Vue({
  el: '#app',
  template: '<App />',
  components: { App }
})