<template>
  <transition name='fade'>
    <div
      class="weui-mask"
      v-show="visible"
      :style="style"
      @touchmove.prevent.stop
      @click.prevent.stop="onHide">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'layer',
  props: {
    visible: Boolean,
    zIndex: Number,
    className: String,
    customStyle: Object
  },
  computed: {
    style () {
      return {
        zIndex: this.zIndex,
        ...this.customStyle
      }
    }
  },
  methods: {
    onHide () {
      this.$emit('update:visible', false)
    }
  }
}
</script>
