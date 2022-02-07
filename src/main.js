import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes';
import { store } from './store/mainStore';
Vue.use(VueRouter);

new Vue({
  router: new VueRouter({ routes, mode: 'history' }),
  el: '#app',
  render: h => h(App),
  store
})
