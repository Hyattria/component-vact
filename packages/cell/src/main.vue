<template>
  <div 
      class="ac-cell"
      @click="click"
    >
    <slot name="icon"></slot>
    <div
      v-if="title || $slots.title" 
      class="ac-cell__title">
      <slot name="title">
        <span v-text="title"></span>
        <div 
          v-if="label"
          v-text="label"
          class="ac-cell__label"
        >
        </div>
      </slot>
    </div>
     <div
      v-if="value || $slots.default"
      class="ac-cell__value"
      >
      <slot>
        <span v-text="value" />
      </slot>
    </div>
    <slot 
      v-if="end || isLink"
      class="ac-cell__end"
      >
      <span v-text="end" />
    </slot>
  </div>
</template>

<script>
export default {
  name: 'AcCell',
  props: {
    title: String,
    label: String,
    end: String,
    isLink: Boolean,
    value: [String, Number]
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>
