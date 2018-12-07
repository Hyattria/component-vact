<template>
  <transition enter-active-class="animated pulse" leave-active-class="animated zoomOut">
    <div class="ac-modal" v-show="visible" @click.stop.self="close">
      <div class="weui-dialog">
        <div class="weui-dialog__hd ac-modal__hd"><strong class="weui-dialog__title">{{ title }}</strong></div>
        <div class="weui-dialog__bd ac-modal__bd">
          <slot name='body'>
            <div v-html="description"></div>
          </slot>
        </div>
        <!-- <div class="weui-dialog__ft" v-if="!description">
          <slot name='footer'></slot>
        </div> -->
        <div class="weui-dialog__cs" @click.stop="close">
          <slot name='close'>
            <i class="ac-icon-roundclose"></i>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import layer from '../../layer/index.js'
export default {
  name: 'AcModal',
  mixins: [layer],
  props: {
    title: String,
    description: String,
    visible: Boolean
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    }
  }
}
</script>
