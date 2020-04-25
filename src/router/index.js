import Vue from 'vue'

import VueRouter from "vue-router";

import Searchsong from '@/components/Searchsong.vue'
import Mymusic from '@/components/Mymusic.vue'
import RecommendMusic from '@/components/RecommendMusic.vue'


Vue.use(VueRouter)
 

const router = new VueRouter({
  routes:[
    { path: '/', redirect: '/recommendmusic'},
    { path: '/mymusic', component: Mymusic},
    { path: '/recommendmusic', component: RecommendMusic},
    { path: '/searchsong', component: Searchsong, name: 'searchsong'}
  ]
})
//挂载路由导航守卫
// router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  //from 代表从哪个路径跳转而来
  //next 是一个函数 表示放行
  //next() 表示放行 next('./mymusic') 表示强制跳转
  // if(to.path === '/recommendmusic') return next();
  //获取token
  // const tokenStr = window.sessionStorage.getItem('token')
  // if(!tokenStr) return next('/recommendmusic')
  // next()
// })

export default router
