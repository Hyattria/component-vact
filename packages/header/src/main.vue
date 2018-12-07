<template>
  <header class="ac-header" :style="{ height }"><slot></slot></header>
</template>

<script>
export default {
  name: 'AcHeader',
  componentName: 'AcHeader',
  props: {
    height: {
      type: String,
      default: 'auto'
    }
  }
}
</script>

<style>

</style>
