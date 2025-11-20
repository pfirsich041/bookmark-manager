<template>
  <v-container>
    <h2>ブックマーク登録</h2>
    <v-form @submit.prevent="addBookmark">
      <v-text-field v-model="newBookmark.title" label="タイトル" required />
      <v-text-field v-model="newBookmark.url" label="URL" required />
      <v-textarea v-model="newBookmark.description" label="説明" />
      <v-btn color="primary" type="submit">登録</v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import type { Bookmark } from '../../types/bookmark';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useBookmarkStore } from '@/stores/bookmarkStore';

const router = useRouter();

const bookmarkStore = useBookmarkStore();

const newBookmark = ref<Omit<Bookmark, 'id'>>({
  title: '',
  url: '',
  description: '',
});

function addBookmark() {
  if (newBookmark.value.title && newBookmark.value.url) {
    bookmarkStore.addBookmark({
      id: Date.now(), // 仮のID生成
      ...newBookmark.value,
    });
    // フォームをリセット
    newBookmark.value = {
      title: '',
      url: '',
      description: '',
    };
    router.push('/');
  }
}
</script>
