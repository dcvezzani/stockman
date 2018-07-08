import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/Home'
import PhotoDetails from '@/components/photo-details/PhotoDetails'
import StockMan from '@/components/photo-list/StockMan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, 
    {
      path: '/list',
      name: 'StockMan',
      component: StockMan
    }, 
    {
      path: '/details',
      name: 'PhotoDetails',
      component: PhotoDetails, 
      props: {foo: true},
    }, 
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
