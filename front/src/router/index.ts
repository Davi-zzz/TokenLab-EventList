import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home.vue";
import Login from "../components/login.vue";
import Register from "../components/register.vue";
import Event from "../components/event.vue";
import User from "../components/user.vue";
import Invite from "../components/invite.vue";
import Page404 from "../components/page404.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
    // children: [
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
        path: "/event",
        name: "event",
        component: Event,
      },
      {
        path: "/user",
        name: "user",
        component: User,
      },
      {
        path: "/invite",
        name: "invite",
        component: Invite,
      },
      // {
      //   path: "*",
      //   component: Page404,
      // }
    // ]
  
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
