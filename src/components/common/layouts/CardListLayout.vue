<template>
    <div class="container-fluid list-content" deck>
      <div class="row">
      <slot />
      </div>
    </div>
</template>

<script>
export default {
  name: 'CardListLayout',
};
</script>

<style>
.list-content {
  padding: 0;
  display: flex;
  height: inherit;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
