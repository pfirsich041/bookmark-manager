<template>
  <v-container style="position: relative; height: calc(100vh - 64px);">
    <v-container style="overflow-y: auto; height: 100%; padding-bottom: 80px">
      <BookmarkList />
    </v-container>
    <v-btn
      class="ma-2"
      color="primary"
      icon="mdi-plus"
      size="large"
      style="position: absolute; bottom: 32px; right: 32px"
      to="/add"
    />
  </v-container>
</template>

<script lang="ts" setup>
//
</script>
