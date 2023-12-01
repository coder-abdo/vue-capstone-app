import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PhotosView from "../views/PhotoByAlbum.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "albums/:id",
          name: "photos",
          component: PhotosView,
        },
      ],
    },
  ],
});

export default router;
