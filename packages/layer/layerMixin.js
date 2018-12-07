export default {
  props: {
    visible: Boolean
  },
  created () {
    this.listen()
  },
  methods: {
    /**
     * 触发显示的事件请求
     * @method show
     * @return {undefined}
     */
    show () {
      this.$emit('update:visible', true)
      return this
    },

    /**
     * 触发隐藏的事件请求
     * @method hide
     * @return {undefined}
     */
    close () {
      this.$emit('update:visible', false)
    },

    listen () {
      this.$on('update:visible', visible => {
        visible ? this.open() : this.destroy()
      })
    },
    open () {
      this.visible = true
    },
    async destroy () {
      this.visible = false
      await this.timeout(500)
      this.$destroy()
      this.removeWrapper()
    },
    removeWrapper () {
      if (this.$el) {
        document.body.removeChild(this.$el)
      }
      return this
    },
    timeout (ms = 3000) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
  }
}
