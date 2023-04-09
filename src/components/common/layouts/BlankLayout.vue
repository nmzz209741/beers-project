<template>
  <b-container class="blank-content layout">
    <main>
      <slot />
    </main>
  </b-container>
</template>

<script>
export default {
  name: 'BlankLayout',
};
</script>

<style>
.blank-content {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  text-align: center;
  height: 90vh;
}
</style>
