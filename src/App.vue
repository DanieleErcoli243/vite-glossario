<script>
import AppHeader from './components/AppHeader.vue';
import { store } from './data/store';

export default {
  name: 'Glossario',
  components: {
    AppHeader
  },
  data: () => ({
    store
  })
};
</script>

<template>
  <AppLoader v-if="store.isLoading" />

  <!-- Header -->
  <AppHeader />

  <!-- Pages -->
  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
