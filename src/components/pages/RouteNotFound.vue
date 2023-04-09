<template>
  <blank-layout>
    <template v-slot:default>
      <b-container>
        <h3>404 Not Found</h3>
        <p>
          URL you are looking for does not exist. Are you looking for the
          correct resource?
        </p>
      </b-container>
    </template>
  </blank-layout>
</template>

<script>
import BlankLayout from '../common/layouts/BlankLayout.vue';

export default {
  name: 'NotFoundComponent',
  components: {
    BlankLayout,
  },
};
</script>

<style scoped>
</style>
