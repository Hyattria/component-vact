import Vue from 'vue'
import Layer from './layer'

export default {
  mounted () {
    this.layer = this.update()
  },
  watch: {
    visible () {
      this.layer.visible = this.visible
    }
  },
  methods: {
    update () {
      const layer = new (Vue.extend(Layer))({
        el: document.createElement('div')
      })
      // 监听
      layer.$on('update:visible', visible => {
        if (!visible) this.$emit('update:visible', false)
      })

      if (layer.$el.parentNode) {
        layer.visible = false
      }
      this.$parent.$el.appendChild(layer.$el)

      return layer
    },
    show (vm) {
      this.visible = true
      return this
    },
    destroy (vm) {
      this.visible = false
    }
  }
}
