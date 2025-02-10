import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
// import CategoriesView from '../views/CategoriesView.vue'
import NewCategoryView from '@/views/NewCategoryView.vue'
// import LoginView from '@/views/LoginView.vue'
import newBank from '@/views/newBankView.vue'
// import RegistrationView from '@/views/RegistrationView.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView,
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import('../views/CategoriesView.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/newCategory',
    name: 'newCategory',
    component: NewCategoryView,
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/newBank',
    name: 'newBank',
    component: newBank,
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView'),
    meta: {
      layout: 'auth',
      auth: false
    }
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../views/RegistrationView'),
    meta: {
      layout: 'auth',
      auth: false
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = 'BankBook';

  const requireAuth = to.meta.auth

  if (requireAuth && store.getters['auth/isAuthenticated']){ // Требуется аутентификация и пользователь аутентифицирован
    next();
  } else if (requireAuth && !store.getters['auth/isAuthenticated']){ // Требуется аутентификация и пользователь не аутентифицирован
    next('/login')
  } else { // Аутентификация не требуется
    next();
  }

  
});

export default router
