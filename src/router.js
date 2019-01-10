import Vue from 'vue'
import Router from 'vue-router'
import Boot from 'pages/boot'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'boot',
      component: Boot
    }
  ]
})
