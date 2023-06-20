<template class="app">
  <app-nav-bar-component></app-nav-bar-component>
  <router-view></router-view>
</template>

<script setup lang="ts">

import AppNavBarComponent from "@/components/AppNavBarComponent.vue";
</script>

<style scoped>
  .app {
    display: flex;
    flex-direction: column;
  }
</style>
