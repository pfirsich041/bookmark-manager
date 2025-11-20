<template>
  <v-container>
    <h2>ブックマーク詳細</h2>
    <v-card v-if="bookmark">
      <v-card-title>{{ bookmark.title }}</v-card-title>
      <v-card-text>
        <a :href="bookmark.url" rel="noopener noreferrer" target="_blank">{{
          bookmark.url
        }}</a>
      </v-card-text>
      <v-card-text>{{ bookmark.description }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import type { Bookmark } from '@/types/bookmark';
import { useBookmarkStore } from '@/stores/bookmarkStore';

const bookmarkStore = useBookmarkStore();

const props = defineProps<{
  bookmark: Bookmark;
}>();
</script>
