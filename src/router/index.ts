/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

import path from 'path';
import { setupLayouts } from 'virtual:generated-layouts';
// Composables
import { createRouter, createWebHistory } from 'vue-router';
// import { routes } from 'vue-router/auto-routes';
import EditBookmark from '../components/bookmarks/EditBookmark.vue';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/index.vue'),
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('../pages/add.vue'),
  },
  {
    path: '/edit/:id',
    name: 'EditBookmark',
    component: () => import('../pages/edit.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err);
    } else {
      console.log('Reloading page to fix dynamic import error');
      localStorage.setItem('vuetify:dynamic-reload', 'true');
      location.assign(to.fullPath);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload');
});

export default router;
