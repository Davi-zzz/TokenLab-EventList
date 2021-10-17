import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home.vue";
import Login from "../components/login.vue";
import Register from "../components/register.vue";
import Page404 from "../components/page404.vue";


const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/welcome",
    name: "home",
    component: Home,
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
  // {
  //   path: "*",
  //   name: '404',
  //   component: Page404,
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
