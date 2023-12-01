export const albums = {
  namespaced: true,
  state: {
    all: [],
  },
  mutations: {
    setAlbums(state, albums) {
      state.all = albums;
    },
  },
  actions: {
    async fetchAlbums({ commit }) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums",
      );
      const albums = await response.json();
      commit("setAlbums", albums);
    },
  },
};
