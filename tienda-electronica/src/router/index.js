import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";
import ProductView from "../views/ProductView.vue";
import DashboardHome from "../views/DashboardHome.vue";


const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: LoginView },
  {
    path: "/dashboard",
    component: DashboardView,
    children: [
      { path: "", name: "DashboardHome", component: DashboardHome }, 
      { path: "productos", name: "Productos", component: ProductView },
      { path: "tarjetas", name: "Tarjetas", component: () => import("../views/ProductCardsView.vue") }

    ]
  },
  { path: "/:pathMatch(.*)*", redirect: "/login" }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
