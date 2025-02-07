import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import MenuView from '../views/MenuView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import NewCategoryView from '@/views/NewCategoryView.vue'
import LoginView from '@/views/LoginView.vue'
import newBank from '@/views/newBankView.vue'
import RegistrationView from '@/views/RegistrationView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      layout: 'main'
    }
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/MenuView.vue'),
    meta: {
      layout: 'main'
    }
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoriesView,
    meta: {
      layout: 'main'
    }
  },
  {
    path: '/newCategory',
    name: 'newCategory',
    component: NewCategoryView,
    meta: {
      layout: 'main'
    }
  },
  {
    path: '/newBank',
    name: 'newBank',
    component: newBank,
    meta: {
      layout: 'main'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      layout: 'auth'
    }
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView,
    meta: {
      layout: 'auth'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = 'BankBook';
  next();
});

export default router
