<template>
    <div
      class="weui-tabbar"
      :style="{ backgroundColor: background }"
      >
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'AcTabbar',
  data () {
    return {
      index: -1,
      currentIndex: -1
    }
  },
  props: {
    background: ''
  },
  mounted () {
    if (this.value >= 0) {
      this.currentIndex = this.value
    }
    this.updateIndex()
  },
  watch: {
    currentIndex (val, oldVal) {
      oldVal > -1 && this.$children[oldVal] && (this.$children[oldVal].currentSelected = false)
      val > -1 && this.$children[val] && (this.$children[val].currentSelected = true)
    }
  },
  methods: {
    updateIndex () {
      if (!this.$children || !this.$children.length) return
      this.number = this.$children.length
      let children = this.$children
      for (let i = 0; i < children.length; i++) {
        children[i].currentIndex = i
        if (children[i].currentSelected) {
          this.index = this.currentIndex = i
        }
      }
    }
  }
}
</script>
