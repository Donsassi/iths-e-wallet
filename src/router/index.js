import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/home";
import AddCard from "../components/AddCard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/addcard",
    name: "About",
    component: AddCard

  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
