<template>
  <label
    class="ac-radio"
    :class="[
      border && size ? 'ac-radio--' + size : '',
      { 'is-disabled': disabled },
      { 'is-focus': focus },
      { 'is-borderd': border },
      { 'is-checked': model === label }
    ]"
  >
  <span class="ac-radio__input"
    :class="{
      'is-disabled': disabled,
      'is-checked': model === label
    }"
  >
  <span class="ac-radio__inner"></span>
  <input
    class="ac-radio__original"
    :disabled="disabled"
    :value="label"
    v-model="model"
    type="radio"
  >
  </span>
   <span class="ac-radio__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'VRadio',
  componentName: 'VRadio',

  data () {
    return {
      focus: false
    }
  },
  computed: {
    isGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.componentName !== 'VRadioGroup') {
          parent = parent.$parent
        } else {
          this._radioGroup = parent
          return true
        }
      }
      return false
    },
    model: {
      get () {
        return this.isGroup ? this._radioGroup.value : this.value
      },
      set (val) {
        if (this.isGroup) {
          this._radioGroup.$emit('input', val)
        }
        this.$emit('input', val)
      }
    }
  },
  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean
  }
}
</script>
