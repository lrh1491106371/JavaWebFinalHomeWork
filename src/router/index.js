import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/User/LoginView.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home/HomeView.vue"),
  },
  {
    path: "/culture",
    name: "culture",
    component: () => import("../views/Culture/CultureView.vue"),
  },
  {
    path: "/food",
    name: "food",
    component: () => import("../views/Food/FoodView.vue"),
  },
  {
    path: "/scenery",
    name: "scenery",
    component: () => import("../views/Scenery/SceneryView.vue"),
  },
  {
    path: "/information",
    name: "information",
    component: () => import("../views/User/UserInfoView.vue"),
  },
  {
    path: "/feedback",
    name: "feedback",
    component: () => import("../views/Feedback/FeedbackView.vue"),
  },
  {
    path: "/panel",
    name: "panel",
    component: () => import("../views/backstage/PanelView.vue"),
  },
  {
    path: "/backHome",
    name: "backHome",
    component: () => import("../views/backstage/HomeView.vue"),
  },
  {
    path: "/backCulture",
    name: "backCulture",
    component: () => import("../views/backstage/CultureView.vue"),
  },
  {
    path: "/backFood",
    name: "backFood",
    component: () => import("../views/backstage/FoodView.vue"),
  },
  {
    path: "/BackScenery",
    name: "BackScenery",
    component: () => import("../views/backstage/SceneryView.vue"),
  },
  {
    path: "/BackUserInfo",
    name: "BackUserInfo",
    component: () => import("../views/backstage/UserInfoView.vue"),
  },
  {
    path: "/BackFeedback",
    name: "BackFeedback",
    component: () => import("../views/backstage/FeedbackView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
