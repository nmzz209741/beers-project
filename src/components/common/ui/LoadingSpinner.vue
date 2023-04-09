<template>
  <b-container class="loading-spinner" v-if="state">
    <b-spinner variant="primary"></b-spinner>
  </b-container>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    state: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style>
.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2em auto;
}
</style>
