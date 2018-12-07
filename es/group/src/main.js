export default {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', [_vm.title ? _c('div', {
      staticClass: "weui-cells__title"
    }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _c('div', {
      staticClass: "weui-cells",
      class: [_vm.type ? 'weui-cells_' + _vm.type : '']
    }, [_vm._t("default")], 2)]);
  },
  name: 'AcGroup',
  props: {
    title: String,
    type: ''
  }
};