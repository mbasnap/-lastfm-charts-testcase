import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import lastfm from './plugins/lastfm';

Vue.config.productionTip = false
Vue.use(lastfm);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
