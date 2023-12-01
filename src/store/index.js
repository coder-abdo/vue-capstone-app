import { createStore } from "vuex";
import { photos } from "./photos";
import { albums } from "./albums";

export const store = createStore({
  modules: {
    photos,
    albums,
  },
});
