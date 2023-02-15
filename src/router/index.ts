import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import Todos from "../views/TodosPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/TodoListView",
      name: "TodoListView",
      component: Todos,
    },
  ],
});

export default router;
