import Vue from 'vue'
import Router from 'vue-router'
import about from '@/components/about'
import home from '@/components/home'
import phone from '@/components/phone.vue'
import tablet from '@/components/tablet.vue'
import computer from '@/components/computer.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: home,
      children:[
        {
          path:'phone',
          component:phone
        },{
          path:'tablet',
          component:tablet
        },{
          path:'computer',
          component:computer
        },{
          path:'',
          component:phone
        }
      ]
    },{
      path:'/about',
      component:about
    },{
      path:'/',
      redirect:'/home'
    }
  ]
})
