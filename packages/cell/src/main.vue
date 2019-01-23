<template>
  <div :class="[
        'weui-cell',
        access ? 'weui-cell_access' : ''
      ]"
      @click="click">
    <div class="weui-cell__hd">
      <slot name='icon'></slot>
      <slot name="hd">{{ title }}</slot>
    </div>
    <div class="weui-cell__bd"><slot name="bd"></slot></div>
    <div class="weui-cell__ft"><slot name="ft">{{ value }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcCell',
  props: {
    access: Boolean,
    title: String,
    value: String
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>
