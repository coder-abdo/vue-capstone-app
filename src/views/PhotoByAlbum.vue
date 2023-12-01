<script setup>
import { computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const route = useRoute();
watchEffect(() => {
  const id = route.params.id;
  store.dispatch("photos/getByAlbum", { albumId: id });
});
const photos = computed(() => store.state.photos.all);
</script>
<template>
  <div class="grid grid-cols-4 gap-2">
    <div v-for="photo in photos" :key="photo.id">
      <img :src="photo.thumbnailUrl" />
    </div>
  </div>
</template>
