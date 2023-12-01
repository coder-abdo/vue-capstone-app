export const photos = {
  namespaced: true,
  state: {
    all: [],
  },
  mutations: {
    setPhotos(state, photos) {
      state.all = photos;
    },
  },
  actions: {
    async getByAlbum(ctx, { albumId }) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?albumId=" + albumId,
      );
      const photos = await response.json();
      console.log(photos);
      ctx.commit("setPhotos", photos);
    },
  },
};
