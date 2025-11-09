import { createRouter, createWebHistory } from 'vue-router'

// Importamos las vistas
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import ProductView from '../views/ProductView.vue'

// Definimos las rutas
const routes = [
  {
    path: '/',
    redirect: '/login' // redirige a login por defecto
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    // Vistas hijas dentro del dashboard
    children: [
      {
        path: 'productos',
        name: 'Productos',
        component: ProductView
      }
      // Si más adelante agregas clientes, sería aquí
      // { path: 'clientes', name: 'Clientes', component: ClientView }
    ]
  }
]

// Crear el enrutador
const router = createRouter({
  history: createWebHistory(), // modo historia para URLs limpias
  routes
})

export default router
