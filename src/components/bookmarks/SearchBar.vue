<template>
  <v-text-field
    @input="e => bookmarkStore.setSearchQuery((e.target as HTMLInputElement).value)"
    label="Search bookmarks"
    prepend-inner-icon="mdi-magnify"
    variant="outlined"
    clearable
    hide-details
  ></v-text-field>
</template>

<script setup lang="ts">
import { useBookmarkStore } from '../../stores/bookmarkStore';

const bookmarkStore = useBookmarkStore();
</script>

<style scoped></style>
