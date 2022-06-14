import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import "firebase/compat/auth";
import { getAuth } from 'firebase/auth';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: false
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requiresAuth: false
    },
  },
  {
    path: '/shops',
    name: 'Shops',
    component: () => import(/* webpackChunkName: "about" */ '../views/Shops.vue'),
    meta: {
      requiresAuth: false
    },
  },
  {
    path: '/artworks',
    name: 'ArtWork',
    component: () => import(/* webpackChunkName: "about" */ '../views/ArtWork.vue'),
    meta: {
      requiresAuth: false
    },
  }
]

const router = new VueRouter({
  mode: "history",
  //base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((res) => res.meta.requiresAuth)) {
    console.log(getAuth().currentUser)
    if (getAuth().currentUser) {
      return next();
    }
    return next("/login");
  }
  else{
    console.log(getAuth().currentUser)
    if (getAuth().currentUser) {
      return next("/");
    }
    return next()
  }
});

export default router
