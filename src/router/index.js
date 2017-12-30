import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import map from '@/components/map'
import Search from '@/components/Search'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'map',
      component: map
    },{
      path: '/',
      name: 'Search',
      component: Search
    }
  ]
})
