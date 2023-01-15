import { createRouter, createWebHistory } from 'vue-router'
import useUserStore from '@/stores/user.js'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Manage from '../views/Manage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass:'text-yellow-500',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/manage-music',
      name: 'manage',
      component: Manage,
      meta: { requiresAuth: true }

    },
    {
      path: '/manage',
      redirect:{name:'manage'},
    },
    {
      path: '/:catchAll(.*)*',
      redirect:{name:'home'}
    },
  ]
});

router.beforeEach((to, from, next) => {


if(!to.meta.requiresAuth){
  next();
  return;
}

const store = useUserStore();

if(store.userLoggedIn){
  next();
}else{
  next({name:'home'});
}

});

export default router
