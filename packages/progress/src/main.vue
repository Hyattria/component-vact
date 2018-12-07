<template>
  <div class='ac-progress'>
    <span
      class="ac-progress__portion"
      :style="portionStyle">
      <span
        class="ac-progress__pivot"
        v-show="showPivot"
        ref='pivot'
        :style="pivotStyle"
      >{{ text }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'AcProgress',
  props: {
    inactive: Boolean,
    pivotText: {
      type: String,
      default: ''
    },
    pivotColor: String,
    value: '',
    total: '',
    showPivot: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#38f'
    },
    textColor: {
      type: String,
      default: '#fff'
    },
    percentage: {
      type: Number,
      // required: true,
      validator: value => value >= 0 && value <= 100
    }
  },
  data () {
    return {
      pivotWidth: 0,
      progressWidth: 0
    }
  },
  computed: {
    text () {
      return this.pivotText === '' ? '' : this.percentage + '%'
    },
    currentColor () {
      return this.inactive ? '#cacaca' : this.color
    },
    pivotStyle () {
      return {
        color: this.textColor,
        background: this.pivotColor || this.currentColor
      }
    },
    portionStyle () {
      return {
        width: (this.progressWidth - this.pivotWidth) * this.percentage / 100 + 'px',
        background: this.currentColor
      }
    }
  },
  mounted () {
    this.getWidth()
  },
  methods: {
    getWidth () {
      this.progressWidth = this.$el.offsetWidth
      this.pivotWidth = this.$refs.pivot ? this.$refs.pivot.offsetWidth : 0
    }
  }
}
</script>
