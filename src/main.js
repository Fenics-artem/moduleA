import Vue from 'vue'
import store from '@/store';
import Root from '../lib/components'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(Root),
}).$mount('#app')
