import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import lastfm from './plugins/lastfm';
import router from './router'
import store from './store'
import InfiniteLoading from 'vue-infinite-loading';
Vue.config.productionTip = false
Vue.use(lastfm);
Vue.use(InfiniteLoading, { /* options */ });
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
