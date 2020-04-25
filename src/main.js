import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css';
// 导入全局样式表
import './assets/style/global.css'

import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}


import axios from 'axios'
//配置请求的根路径，这样就可以不用每次都重复写
axios.defaults.baseURL = 'http://localhost:3000/'
//直接访问this.$http就可以发起请求
Vue.prototype.$http = axios
Vue.config.productionTip = false

//将时间改为标准时间格式

Vue.filter('formatTime', function(time) {
    time = Math.floor(time / 1000)
    let second = time % 60
    let min = (time - second) / 60
    second = second > 9 ? second : `0${second}`
    min = min > 9 ? min : `0${min}`
    return `${min}:${second}`
  }
)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
