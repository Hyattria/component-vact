<template>
  <label
    @click="toClick"
    class="weui-cell weui-check__label">
    <div class="weui-cell__hd">
      <slot name="hd" v-if="position !== 'hd'"></slot>
      <input :type="type"
        v-if="position === 'hd'"
        v-model="model"
        :value="label"
        name="checkbox1"
        class="weui-check">
      <i  v-if="position === 'hd'" class="weui-icon-checked"></i>
    </div>
    <div class="weui-cell__bd"><slot></slot></div>
    <div class="weui-cell__ft">
      <slot name="ft" v-if="position !== 'ft'"></slot>
      <input :type="type"
        v-if="position === 'ft'"
        v-model="model"
        :value="label"
        name="checkbox1"
        class="weui-check">
      <i v-if="position === 'ft'" class="weui-icon-checked"></i>
    </div>
  </label>
</template>

<script>
export default {
  name: 'AcXcheckbox',
  props: {
    value: {},
    label: {},
    type: {
      type: String,
      default: 'checkbox'
    },
    position: {
      type: String,
      default: 'hd'
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    toClick () {
      this.$emit('click')
    }
  }
}
</script>
