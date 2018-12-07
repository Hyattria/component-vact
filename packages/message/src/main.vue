<template>
  <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
    <div
      :class="[
        'ac-message',
        type ? `ac-message--${ type }` : '',
        autoClose ? 'is-closable' : '',
      ]"
      v-show="visible">
      <div class="ac-message__head">
        <i :class="typeClass"></i>
        <span style="font-size: .94rem">{{ typeInfo }}</span>
      </div>
      <p class="ac-message__content">{{ message }}</p>
        <!-- <p v-else v-html="message" class="ac-message__content"></p> -->
      <i v-if="!autoClose" class="ac-message__closeBtn ac-icon-close" @click="close"></i>
    </div>
  </transition>
</template>

<script>
import layerMixin from '../../layer/layerMixin.js'

const typeMap = {
  success: { type: 'success', title: '操作成功' },
  info: { type: 'info', title: '提示' },
  warning: { type: 'warning', title: '注意' },
  error: { type: 'error', title: '发生错误' }
}
export default {
  name: 'AcMessage',
  mixins: [layerMixin],
  props: {
    message: {
      type: String,
      default: '你有一条消息'
    },
    duration: {
      type: Number,
      default: 3000
    },
    type: {
      type: String,
      default: 'info'
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    typeClass () {
      return this.type && `ac-message__icon ac-icon-${typeMap[this.type].type}`
    },
    typeInfo () {
      return this.type && typeMap[this.type].title
    }
  },
  mounted () {
    // 设定的时间后自动关闭
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.duration)
    }
  }
}
</script>
