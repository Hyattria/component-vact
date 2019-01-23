"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: ['weui-cell', _vm.access ? 'weui-cell_access' : ''],
      on: {
        "click": _vm.click
      }
    }, [_c('div', {
      staticClass: "weui-cell__hd"
    }, [_vm._t("icon"), _vm._t("hd", [_vm._v(_vm._s(_vm.title))])], 2), _c('div', {
      staticClass: "weui-cell__bd"
    }, [_vm._t("bd")], 2), _c('div', {
      staticClass: "weui-cell__ft"
    }, [_vm._t("ft", [_vm._v(_vm._s(_vm.value))])], 2)]);
  },
  name: 'AcCell',
  props: {
    access: Boolean,
    title: String,
    value: String
  },
  methods: {
    click: function click() {
      this.$emit('click');
    }
  }
};
exports.default = _default;