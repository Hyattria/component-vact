<template>
  <transition name="fade">
    <div class="ac-mark ng-scope" v-show="visible">
      <div class="ac-pacman">
        <div>
          <div
            v-for="itme of 3"
            :key="itme"
            :style="{ backgroundColor: color }">
          </div>
        </div>
        <div>
          <div
            v-for="itme of 2"
            :key="itme"
            :style="{ backgroundColor: background }">
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import layerMixin from '../../layer/layerMixin.js'
export default {
  name: 'AcLoading',
  mixins: [layerMixin],
  data () {
    return {
      text: 'loading'
    }
  },
  props: {
    color: {
      type: String,
      default: '#5bc0de'
    },
    background: {
      type: String,
      default: '#337ab7'
    }
  }
}
</script>
