import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import IceCreamView from "@/views/IceCreamView.vue";
import ConeView from "@/views/ConeView.vue";
import FlavorView from "@/views/FlavorView.vue";
import ToppingView from "@/views/ToppingView.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "home", component: HomeView },
  { path: "/icecream", name: "icecream", component: IceCreamView },
  { path: "/cone", name: "cone", component: ConeView },
  { path: "/flavor", name: "flavor", component: FlavorView },
  { path: "/topping", name: "topping", component: ToppingView },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
