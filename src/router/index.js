import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PhotoDetails from '@/components/PhotoDetails'
import StockMan from '@/components/StockMan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StockMan',
      component: StockMan
    }, 
    {
      path: '/details',
      name: 'PhotoDetails',
      component: PhotoDetails
    }, 
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
