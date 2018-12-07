<template>
  <div class="ac-collapse">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AcCollapse',
  props: {
    value: ''
  }
}
</script>

<style>
  .ac-collapse {
    background: #fff;
  }
</style>

