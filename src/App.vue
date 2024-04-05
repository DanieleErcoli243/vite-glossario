<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './components/pages/HomePage.vue';
import DetailPage from './components/pages/DetailPage.vue';
import ContactUsPage from './components/pages/ContactUsPage.vue';
export default {
  name: 'Glossario',
  components: {
    AppHeader, HomePage, DetailPage, ContactUsPage
  }
};
</script>

<template>
  <AppHeader />
  <RouterVue />
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
