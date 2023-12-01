<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Layout from "../components/Layout.vue";
import Album from "../components/Album.vue";
const store = useStore();
onMounted(() => {
  store.dispatch("albums/fetchAlbums");
});
const albums = computed(() => store.state.albums.all);
</script>

<template>
  <Layout>
    <template #header>
      <h1 class="text-3xl font-bold text-center">Capstone Project | Photos</h1>
    </template>
    <template #aside>
      <Album v-for="album in albums" :key="album.id" :album="album"> </Album>
    </template>
    <template #main>
      <router-view />
    </template>
  </Layout>
</template>
