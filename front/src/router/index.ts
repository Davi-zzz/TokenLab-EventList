import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home.vue";
import Login from "../components/login.vue";


const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/welcome",
    name: "home",
    component: Home,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
