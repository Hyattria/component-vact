import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ui from '../packages/index'
import '../theme-default/lib/index.css'
Vue.use(ui)

/* eslint-disable */
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
