<template>
  <button
    class="ac-button"
    @click="handleClick"
    :class="[
      type ? 'ac-button--' + type : '',
      size ? 'ac-button--' + size : '',
      {
        'is-plain': plain,
        'is-disabled': disabled,
        'is-loading': loading,
        'is-round': round,
        'is-circle': circle
      }
    ]"
    :disabled='disabled'
    :style="type === 'default' && color && colorObj"
  >
  <i class="ac-icon-loading" v-if="loading"></i>
  <i v-if="icon !==''" :class='icon'></i>
  <span v-if="$slots.default">
    <slot></slot>
  </span>
  </button>
</template>

<script>
export default {
  name: 'AcButton',
  data () {
    return {
      loading: false,
      colorObj: {
        color: '#fff',
        backgroundColor: this.color,
        borderColor: this.color
      }
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      defautl: undefined
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt, this)
    }
  }
}
</script>
