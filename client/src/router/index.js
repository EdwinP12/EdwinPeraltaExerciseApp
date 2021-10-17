import { createRouter, createWebHistory } from 'vue-router'
import Session from '../services/session';
import Home from '../views/Home.vue';
import Feed from '../views/Feed.vue';
import Diet from "../views/Diet.vue";
import Activities from "../views/Activities.vue";
import Contact from "../views/Contact.vue";
import SignUp from "../views/SignUp.vue";
import Profile from "../views/Profile.vue";
import Exercises from "../views/Exercises.vue";
import Friends from "../views/Friends.vue";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/feed',
        name: 'Feed',
        component: Feed,
        meta: { requiresLogin: true }
      },
      {
        path: '/diet',
        name: 'Diet',
        component: Diet,
        meta: { requiresLogin: false }
      },
      {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: { requiresLogin: false }
      },
      {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
        meta: { requiresLogin: false }
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: { requiresLogin: true }
      },
      {
        path: '/activities',
        name: 'Activities',
        component: Activities,
        meta: { requiresLogin: true }
      },
      {
        path: '/exercises',
        name: 'Exercises',
        component: Exercises,
        meta: { requiresLogin: false }
      },
      {
        path: '/friends',
        name: 'Friends',
        component: Friends,
        meta: { requiresLogin: true }
      },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresLogin && !Session.user){
        next('/login');
    }else{
        next();
    }
  } )

export default router
