<template>
  <b-container class="home-page">
    <nav-bar class="home-page__nav"></nav-bar>
    <router-view class="home-page__content"></router-view>
  </b-container>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue';

export default {
  name: 'HomePage',
  components: {
    NavBar,
  },
};
</script>

<style>
.home-page {
  height: 100%;
}
</style>
