<template>
  <div>
    <div class="weui-cells__title" v-if="title">{{ title }}</div>
    <div class="weui-cells"
      :class="[
         type ? 'weui-cells_' + type : ''
      ]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcGroup',
  props: {
    title: String,
    type: ''
  }
}
</script>

<style>

</style>
