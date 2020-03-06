/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/addItem',
    //   name: 'AddItem',
    //   component: AddItem
    // },
    // {
    //   path: '/editItem/:itemId',
    //   name: 'EditItem',
    //   component: EditItem
    // },
    // {
    //   path: '/deleteItem/:itemId',
    //   name: 'DeleteItem',
    //   component: DeleteItem
    // }
  ]
})
