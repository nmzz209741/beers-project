<template>
  <home-page></home-page>
</template>

<script>
/**
 * @author Shreeti Shrestha
 * App Component
 * Starting view of the application
 */
import HomePage from '@/components/Home.vue';

export default {
  name: 'App',
  components: {
    HomePage,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #252425;
}
</style>
