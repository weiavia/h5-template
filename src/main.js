import '@/resource/style/common.scss'
import '@/resource/style/animate.css'
import Vue from 'vue/dist/vue'
import App from './app'
import Router from 'vue-router'
import router from './router'
import weixin from './weixin'
import music from './base/music'

weixin()

import { ToastPlugin, AlertPlugin, LoadingPlugin  } from 'vux'

Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(Router)
Vue.use(music)

window.bus = new Vue()
window.vm = new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App }
})