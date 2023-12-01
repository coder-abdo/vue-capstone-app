<script setup>
import { useStore } from "vuex";
const store = useStore();
const props = defineProps({
  album: {
    type: Object,
    required: true,
  },
});
const albumLink = `/albums/${props.album.id}`;
</script>
<template>
  <router-link
    :to="albumLink"
    class="bg-zinc-200 block text-center mb-2 last:mb-0 w-full p-2 hover:bg-black hover:text-zinc-100 transition"
  >
    {{ album.title }}
  </router-link>
</template>
