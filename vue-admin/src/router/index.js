import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect:"login"
  },
  {
    path:"/login",
    name:"Login",
    component: () => import ("../views/login/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
