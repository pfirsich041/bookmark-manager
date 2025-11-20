<template>
  <v-container>
    <v-card
      v-for="bookmark in bookmarkStore.bookmarks"
      :key="bookmark.id"
      class="mb-4"
    >
      <v-card-title>{{ bookmark.title }}</v-card-title>
      <div class="d-flex justify-space-between align-center">
        <div>
          <v-card-text>
            <a :href="bookmark.url" rel="noopener noreferrer" target="_blank">{{
              bookmark.url
            }}</a>
          </v-card-text>
          <v-card-text>{{ bookmark.description }}</v-card-text>
        </div>
        <div class="d-flex">
          <v-btn
            class="ma-2"
            color="primary"
            icon="mdi-pencil"
            size="small"
            :to="`/edit/${bookmark.id}`"
          ></v-btn>
          <v-btn
            class="ma-2"
            color="primary"
            icon="mdi-delete"
            size="small"
            @click="bookmarkStore.deleteBookmark(bookmark.id)"
          ></v-btn>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useBookmarkStore } from '@/stores/bookmarkStore';

const bookmarkStore = useBookmarkStore();
</script>
