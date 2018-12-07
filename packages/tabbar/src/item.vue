<template>
  <a href="javascript:;"
    class="weui-tabbar__item"
    :class="{'weui-bar__item_on': isActive }"
    @click="onItemClick"
    >
    <div class="weui-tabbar__icon">
      <slot name="icon" v-if="!isActive"></slot>
      <slot name="icon-active" v-if="isActive"></slot>
    </div>
    <p class="weui-tabbar__label">
      <slot name="label"></slot>
    </p>
  </a>
</template>

<script>
export default {
  name: 'AcTabbarItem',
  data () {
    return {
      currentIndex: -1,
      currentSelected: this.selected
    }
  },
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isActive () {
      return this.$parent.index === this.currentIndex
    }
  },
  methods: {
    onItemClick () {
      this.$parent.currentIndex = this.currentIndex
      this.$emit('click')
    }
  },
  watch: {
    currentSelected (val) {
      if (val) {
        this.$parent.index = this.currentIndex
      }
    }
  }
}
</script>

<style>

</style>
