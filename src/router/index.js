import { createRouter, createWebHistory } from "vue-router";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
//import Home from "../views/Home.vue"
import Responder from "../views/Tables.vue";
import Profile from "../views/Profile.vue"

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/sign-in",
  },

  {
    path: "/Responder",
    name: "Responder",
    component: Responder,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
