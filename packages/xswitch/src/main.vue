<template>
  <div class="weui-cell weui-cell_switch">
    <div class="weui-cell__bd">{{ title }}</div>
    <div class="weui-cell__ft">
        <input
          class="weui-switch"
          type="checkbox"
          v-model="model"
        />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcXswitch',
  props: {
    title: String,
    value: {}
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
  }
}
</script>

<style>

</style>
