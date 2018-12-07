<template>
  <transition  leave-active-class="weui-animate-slide-down">
    <div
      class="weui-picker ac-popup"
      v-show="visible"
      :class="{ 'weui-animate-slide-up': visible }">
      <div class="ac-popup__icon">
        <i class="ac-icon-close" @click="close"></i>
      </div>
      <div class="weui-picker__hd">{{ title }}</div>
      <div class="weui-picker__bd">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import layer from '../../layer'
export default {
  name: 'AcPopup',
  mixins: [layer],
  props: {
    visible: Boolean,
    title: String
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    }
  }
}
</script>
