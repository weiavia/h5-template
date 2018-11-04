import '@/resource/style/reset.css'
import '@/resource/style/rem.scss'
import Vue from 'vue/dist/vue'
import App from './app'

new Vue({
  el: '#app',
  template: '<App />',
  components: { App }
})