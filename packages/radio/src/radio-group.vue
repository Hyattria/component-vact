<template>
  <div class="ac-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AcRadioGroup',
  componentName: 'AcRadioGroup',

  props: {
    value: {},
    disabled: Boolean
  },

  created () {
    this.$on('handleChange', value => {
      this.$emit('change', value)
    })
  }
}
</script>
