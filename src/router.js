import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export default new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "game",
        component: () => import("./components/Game")
      }
      ,
      {
        path: "/tutorials",
        name: "tutorials",
        component: () => import("./components/TutorialsList")
      },
      {
        path: "/tutorials/:id",
        name: "tutorial-details",
        component: () => import("./components/Tutorial")
      },
      {
        path: "/add",
        name: "add",
        component: () => import("./components/AddTutorial")
      }
    ]
  });
