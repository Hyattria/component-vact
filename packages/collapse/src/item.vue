<template>
  <div class="ac-collapse__item">
    <div
      :class="[
        'weui-cell',
        'weui-cell_access',
        { 'is-expanded': expanded }
      ]"
      @click="click">
        <div class="weui-cell__hd">
        <slot name='icon'></slot>
        <slot name="hd">{{ title }}</slot>
      </div>
      <div class="weui-cell__bd"><slot name="bd"></slot></div>
      <div class="weui-cell__ft"><slot name="ft">{{ value }}</slot></div>
    </div>
    <div ref="wrapper" class="ac-collapse__item--wrapper" v-show="show" @transitionend="onTransitionEnd">
      <div ref="content" class="ac-collapse__item--content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcCollapseItem',
  data () {
    return {
      show: null,
      parent: null,
      expanded: false
    }
  },
  props: {
    access: Boolean,
    title: String,
    value: String
  },
  created () {
    this.findParent('AcCollapse')
    this.show = this.expanded
  },
  watch: {
    expanded (expanded, prev) {
      if (prev === null) {
        return
      }
      if (expanded) {
        this.show = true
      }
      this.$nextTick(() => {
        const { content, wrapper } = this.$refs
        if (!content || !wrapper) {
          return
        }

        const contentHeight = content.clientHeight + 'px'
        wrapper.style.height = expanded ? contentHeight : 0
      })
    }
  },
  methods: {
    click () {
      this.expanded = !this.expanded
      this.$emit('click')
    },
    onTransitionEnd () {
      if (!this.expanded) {
        this.show = false
      }
    },
    findParent (name) {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === name) {
          this.parent = parent
          break
        }
        parent = parent.$parent
      }
    }
  }
}
</script>

<style lang="scss">
  .ac-collapse {
    .weui-cell_access .weui-cell__ft:after {
      transform: rotate(135deg);
      transition: all .3s ease-in-out;
    }

    .is-expanded {
      .weui-cell__ft:after {
        top: .2rem;
        transform: rotate(-45deg)
      }
    }
  }
  .ac-collapse__item--wrapper {
    height: 0px;
    overflow: hidden;
    will-change: height;
    transition: height .3s ease-in-out;
    background-color: white;
  }
  .ac-collapse__item--content {
    padding: 15px;
    background-color: #fff;

    font-size: 13px;
    line-height: 1.5;
    color: #666;
  }
</style>
