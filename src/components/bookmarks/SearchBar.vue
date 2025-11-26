<template>
  <v-text-field
    v-model="searchQuery"
    label="Search bookmarks"
    prepend-inner-icon="mdi-magnify"
    variant="outlined"
    clearable
    hide-details
  ></v-text-field>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useBookmarkStore } from '@/stores/bookmarkStore';

const searchQuery = ref('');
const bookmarkStore = useBookmarkStore();
bookmarkStore.setSearchQuery(searchQuery);

</script>

<style scoped>
/* Add any specific styles for your search bar here if needed */
</style>
