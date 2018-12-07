<template>
  <div
    class="ac-card__item"
    :class="{ 'is-vertical': isVertical }"
    :style="{ width }"
    >
    <slot name="prefix">
      <div class="ac-card__prefix">
         <img :src="prefix">
      </div>
    </slot>
    <div class="ac-card__body" v-if="title || value">
      <p class="ac-card__body-title">{{ title }}</p>
      <span class="ac-card__body-value">{{ value }}</span>
      <slot name='body'></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AcCardItem',
  props: {
    title: String,
    value: String,
    prefix: String
  },
  computed: {
    isVertical () {
      if (this.$parent.$options.name === 'AcCard') {
        return !this.$parent.$props.vertical
      } else {
        return true
      }
    },
    width () {
      if (this.$parent.$props === 'AcCard') {
        return this.isVertical && `${100 / this.$parent.$props.column - 1}%`
      }
    }
  }
}
</script>
