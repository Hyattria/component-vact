<template>
  <div
    class="ac-card"
    :class="{
      'is-vertical' : vertical
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AcCard',
  props: {
    vertical: Boolean,
    column: {
      type: Number,
      default: 2
    },
    thumb: String
  }
}
</script>

<style>

</style>
