<template>
  <v-container>
    <h2>ブックマーク編集</h2>
    <v-form @submit.prevent="editBookmark">
      <v-text-field v-model="editingBookmark.title" label="タイトル" required />
      <v-text-field v-model="editingBookmark.url" label="URL" required />
      <v-textarea v-model="editingBookmark.description" label="説明" />
      <div class="d-flex gap-4">
        <v-btn color="primary" type="submit">登録</v-btn>
        <v-btn @click="router.push('/')">キャンセル</v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import type { Bookmark } from '../../types/bookmark';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useBookmarkStore } from '@/stores/bookmarkStore';

const router = useRouter();
const route = useRoute();

const editingBookmarkId = Number(route.params.id);

const prevBookmark = useBookmarkStore().getBookmarkById(editingBookmarkId);

const editingBookmark = ref<Omit<Bookmark, 'id'>>({
  title: prevBookmark.title,
  url: prevBookmark.url,
  description: prevBookmark.description,
});

const bookmarkStore = useBookmarkStore();

function editBookmark() {
  if (editingBookmark.value.title && editingBookmark.value.url) {
    bookmarkStore.editBookmark({
      id: editingBookmarkId,
      ...editingBookmark.value,
    });
    // フォームをリセット
    editingBookmark.value = {
      title: '',
      url: '',
      description: '',
    };
    router.push('/');
  }
}
</script>
