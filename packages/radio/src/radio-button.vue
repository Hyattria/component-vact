<template>
  <label class="ac-radio-button"
      :class="[
        { 'is-disabled': disabled },
        { 'is-active': value === label }
      ]"
    >
    <input
      type="radio"
      class="ac-radio-button__orig-radio"
      v-model="value"
      :value="label"
      :name="name"
      >
    <span
      class="ac-radio-button__inner" :style="value === label ? activeStyle : null">
      <slot></slot>
      <template v-if="!$slots.default"></template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'AcRadioButton',
  componentName: 'AcRadioButton',
  props: {
    label: {},
    disabled: Boolean,
    round: Boolean,
    name: String
  },
  data () {
    return {
      focus: String
    }
  },
  computed: {
    value: {
      get () {
        return this._radioGroup.value
      },
      set (val) {
        this._radioGroup.$emit('input', val)
      }
    },
    _radioGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.componentName !== 'AcRadioGroup') {
          parent = parent.$parent
        } else {
          return parent
        }
      }
      return false
    },
    activeStyle () {
      return {
        backgroundColor: this._radioGroup.fill || '',
        borderColor: this._radioGroup.fill || '',
        boxShadow: this._radioGroup.fill ? `-1px 0 0 0 ${this._radioGroup.fill}` : '',
        color: this._radioGroup.textColor || ''
      }
    }
  }
}
</script>

<style>

</style>
