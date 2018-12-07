<template>
  <label
    @click="toClick"
    class="weui-cell weui-check__label">
    <div class="weui-cell__hd">
      <slot name="hd" v-if="position !== 'hd'"></slot>
      <input :type="type"
        v-if="position === 'hd'"
        v-model="model"
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

<style>
 /* .weui-check__label .weui-icon-checked:before {
    content: '\EA01';
    color: #C9C9C9;
    font-size: 1.533333rem;
    display: block;
  }
  .weui-check__label  .weui-check:checked + .weui-icon-checked:before {
    content: '\EA06';
    color: #09BB07;
  }
  .weui-check__label  .weui-cell__bd {
    margin-left: .5rem;
  } */
</style>
