import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import routes from './rotes'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router=new VueRouter({
  routes
})

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
