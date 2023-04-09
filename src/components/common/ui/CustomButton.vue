<template>
  <b-button
    class="btn"
    :class="type==='transparent'? 'btn-transparent': 'btn-blue'"
    @click="handler"
  >
    <slot></slot>
  </b-button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    type: {
      type: String,
      default: 'info',
    },
    modalId: {
      type: String,
      default: '',
    },
    handler: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style>
.btn-blue:hover{
  background-color: #023f80;
  color: #fff;
  border-color: #023f80;
}
.btn-blue {
  background-color: #0066cc;
  color: #fff;
  border-color: #0066cc;
}
.btn-transparent {
  background-color: transparent;
  color: #023f80;
  border:none;
}
.btn-transparent:hover, .btn-transparent:active {
  background-color: transparent !important;
  color: #0066cc !important;
  border:none;
  font-weight: 500;
}

</style>
