export default {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('section', {
      staticClass: "ac-container",
      class: {
        'is-vertical': _vm.isVertical
      }
    }, [_vm._t("default")], 2);
  },
  name: 'AcContainer',
  componentName: 'AcContainer',
  props: {
    direction: String
  },
  computed: {
    isVertical: function isVertical() {
      if (this.direction === 'vertical') {
        return true;
      } else if (this.direction === 'horizontal') {
        return false;
      }

      return this.$slots && this.$slots.default ? this.$slots.default.some(function (vnode) {
        var tag = vnode.componentOptions && vnode.componentOptions.tag;
        return tag === 'ac-header' || tag === 'ac-footer';
      }) : false;
    }
  }
};