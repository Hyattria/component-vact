<template>
  <div class='ac-circle'
    :style="styleObject">

    <div class='ac-circle__content'>
      <svg :style="styleObject" viewBox='0 0 94 94'>
        <path d="M 24 74 a 37 37 0 1 1 40 0"
          stroke-linecap="round"
          stroke="#ebeef5"
          stroke-width="6.8" fill="none">
        </path>
        <path d="M 24 74 a 37 37 0 1 1 40 0"
            stroke-linecap="round"
            :stroke="color || '#E63B3F'"
            stroke-width="6.8" fill="none"
            class="el-progress-circle__path"
            style="stroke-dasharray:191 191; stroke-dashoffset: -191; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;"
            :style="{ strokeDashoffset: offset }">
        </path>
      </svg>
    </div>
    <div class='ac-circle__text'>
      <div>{{ value }}</div>
      <div>{{ percentage }}%</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcCircle',
  data () {
    return {
      styleObject: {
        width: this.width,
        height: this.height
      }
    }
  },
  computed: {
    offset () {
      return -(191 + 191 * (this.percentage / 100))
    }
  },
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    value: {
      type: String,
      default: '已抢'
    },
    color: String,
    width: {
      type: String,
      default: '4.5rem'
    },
    height: {
      type: String,
      default: '4.5rem'
    }
  }
}
</script>
