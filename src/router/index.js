import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

//webpack按需加载组件
const Backstage = r => require.ensure([], () => r(require('../page/element/backstage')), ' backstage');
const Welcome = r => require.ensure([], () => r(require('../page/element/welcome')), 'welcome');
const User = r => require.ensure([], () => r(require('../page/element/user')), 'user');
const Role = r => require.ensure([], () => r(require('../page/element/role')), 'role');
const home = r => require.ensure([], () => r(require('../page/home/home')), ' home');
const Details = r => require.ensure([], () => r(require('../page/details')), ' details');

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/backstage'
    },
    {
      path: '/backstage',
      name: 'backstage',
      component: Backstage,
      redirect:'/welcome',
      children:[
        {
          path: '/welcome',
          component:Welcome
        },
        {
          path: '/user',
          component:User
        },
        {
          path: '/role',
          component:Role
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    }
  ]
});
