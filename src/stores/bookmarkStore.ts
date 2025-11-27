import type { Bookmark } from '../types/bookmark.ts';
import { acceptHMRUpdate, defineStore } from 'pinia';
import { debounce } from 'lodash-es';

interface BookmarkState {
  bookmarks: Bookmark[];
  searchQuery: string; // ✨ 新しく追加
}

export const useBookmarkStore = defineStore('bookmark', {
  state: (): BookmarkState => ({
    bookmarks: JSON.parse(localStorage.getItem('bookmarks') || '[]'),
    searchQuery: '',
  }),
  getters: {
    getBookmarkById: (state) => (id: number) => {
      return state.bookmarks.find((bookmark) => bookmark.id === id);
    },
    filteredBookmarks: (state) => {
      if (!state.searchQuery) {
        return state.bookmarks;
      }

      const lowerCaseQuery = state.searchQuery.toLowerCase();
      return state.bookmarks.filter((bookmark) =>
        bookmark.title.toLowerCase().includes(lowerCaseQuery),
      );
    },
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
    setSearchQuery: debounce(function (this: any, text: string) {
      this.searchQuery = text;
    }, 300),
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBookmarkStore, import.meta.hot));
}
