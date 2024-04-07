<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'Glossario',
  components: {
    AppHeader
  },
  data: () => ({
    isloading: false
  })
};
</script>

<template>
  <AppHeader />
  <AppLoader />
  <div class="container">
    <RouterView />

  </div>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
