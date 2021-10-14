import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home.vue";

// import axios from "axios";

// async function UserAuth(to, from, next) {
//   if (localStorage.getItem("token") != undefined) {
//     const req = {
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("token"),
//       },
//     };
//     await axios
//       .post("http://localhost:3030/validate", {}, req)
//       .then((res) => {
//         if (res.data.valid) {
//           next();
//         } else {
//           localStorage.removeItem("token");
//           next("/");
//         }
//       })
//       .catch(() => {
//         localStorage.removeItem("token");
//         next("/");
//       });
//   } else {
//     localStorage.removeItem("token");
//     next("/");
//   }
// }

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
