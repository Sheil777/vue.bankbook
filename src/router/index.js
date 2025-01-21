import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import NewCategoryView from '@/views/NewCategoryView.vue'
import LoginView from '@/views/LoginView.vue'
import newBank from '@/views/newBankView.vue'
import RegistrationView from '@/views/RegistrationView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView,
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoriesView,
  },
  {
    path: '/newCategory',
    name: 'newCategory',
    component: NewCategoryView,
  },
  {
    path: '/newBank',
    name: 'newBank',
    component: newBank,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView,
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
