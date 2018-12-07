<template>
  <div class="ac-cart"
    :style="{ backgroundColor: color }"
    @click="toCart">
    <div class="ac-cart__img"></div>
    <div class="ac-cart__count" v-if="count">{{ cartCount+model || 0 }}</div>
    <slot></slot>
  </div>
</template>

<script>
import { CITY, TOKEN } from '../../../utils/token.js'
export default {
  name: 'AcCart',
  data () {
    return {
      test: process.env.NODE_ENV !== 'production',
      cartCount: 0,
      city: CITY.get(),
      token: TOKEN.get()
    }
  },
  props: {
    value: {},
    color: {
      type: String,
      default: '#e6a23c'
    },
    count: {
      type: Number,
      default: 0
    }
  },
  computed: {
    model: {
      get () {
        return this.value || 0
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    toCart () {
      this.$emit('tocart')
    }
  }
}
</script>
