export default {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('footer', {
      staticClass: "ac-footer",
      style: {
        height: _vm.height
      }
    }, [_vm._t("default")], 2);
  },
  name: 'AcFooter',
  componentName: 'AcFooter',
  props: {
    height: {
      type: String,
      default: '4rem'
    }
  }
};