<template>
  <v-text-field
    v-model="searchQuery"
    @keyup.enter="updateSearchQuery"
    label="Search bookmarks"
    prepend-inner-icon="mdi-magnify"
    variant="outlined"
    clearable
    hide-details
  ></v-text-field>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useBookmarkStore } from '@/stores/bookmarkStore';

const bookmarkStore = useBookmarkStore();
const searchQuery = ref(bookmarkStore.searchQuery);

const updateSearchQuery = (searchQuerye) => {
  bookmarkStore.setSearchQuery(searchQuery.value || '');
};
</script>

<style scoped></style>
