import '@/resource/style/common.scss'
import Vue from 'vue/dist/vue'
import App from './app'

import { AlertPlugin, ToastPlugin } from 'vux'
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

window.vm = new Vue({
  el: '#app',
  template: '<App />',
  components: { App }
})