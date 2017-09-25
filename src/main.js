import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import '../static/font/iconfont.js'

Vue.config.productionTip = false
import { Button } from 'element-ui'
Vue.use(Button)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
