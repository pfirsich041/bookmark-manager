import type { Bookmark } from '@/types/bookmark';
import { acceptHMRUpdate, defineStore } from 'pinia';

export const useBookmarkStore = defineStore('bookmark', {
  state: () => ({
    bookmarks: JSON.parse(
      localStorage.getItem('bookmarks') || '[]',
    ) as Bookmark[],
  }),
  getters: {
    getBookmarkById: (state) => (id: number) =>
      state.bookmarks.find((bookmark) => bookmark.id === id),
  },
  actions: {
    addBookmark(bookmark: Bookmark) {
      this.bookmarks.push(bookmark);
      localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
    },
    editBookmark(bookmark: Bookmark) {
      const index = this.bookmarks.findIndex((b) => b.id === bookmark.id);
      if (index !== -1) {
        this.bookmarks[index] = bookmark;
      }
    },
    deleteBookmark(id: number) {
      this.bookmarks = this.bookmarks.filter((bookmark) => bookmark.id !== id);
      localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
    },
    // setBookmarks(bookmarks: Bookmark[]) {
    //   this.bookmarks = bookmarks;
    // }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBookmarkStore, import.meta.hot));
}
