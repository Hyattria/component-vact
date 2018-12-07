
<template>
  <transition name="fade">
    <div
      class="ac-toast"
      v-show="visible">
      {{ message }}
    </div>
  </transition>
</template>

<script>
  import layerMixin from '../../layer/layerMixin.js'
  export default {
    name: 'AcToast',
    mixins: [layerMixin],
    mounted () {
      // 设定的时间后自动关闭
      setTimeout(() => {
        this.close()
      }, this.duration)
    },
    props: {
      message: {
        type: String,
        default: '你有一条消息'
      },
      duration: {
        type: Number,
        default: 3000
      }
    }
  }
</script>
