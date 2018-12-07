<template>
  <transition enter-active-class="animated pulse" leave-active-class="animated zoomOut">
    <div class="weui-mask" v-show="visible" @click.stop.self="close">
    <div class="weui-dialog ac-confirm">
      <div class="weui-dialog__hd ac-confirm__hd"><strong class="weui-dialog__title">{{ title }}</strong></div>
      <div class="weui-dialog__bd ac-confirm__bd" v-html="description"></div>
      <div class="weui-dialog__ft ac-confirm__ft">
        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" v-if="!noCancel" @click="close">{{ cancelText }}</a>
        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="confirm">{{ confirmText }}</a>
      </div>
    </div>
    </div>
  </transition>
</template>

<script>
import layerMixin from '../../layer/layerMixin.js'
export default {
  name: 'AcConfirm',
  mixins: [layerMixin],
  props: {
    title: {
      type: String,
      default: '弹窗标题'
    },
    description: String,
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    noCancel: Boolean
  },
  methods: {
    on (event, callback) {
      this.$on(event, callback)
      return this
    },
    confirm (evt) {
      this.close()
      this.$emit('confirm', evt, this)
    }
  }
}
</script>
