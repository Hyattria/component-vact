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
      staticClass: "ac-card",
      class: {
        'is-vertical': _vm.vertical
      }
    }, [_vm._t("default")], 2);
  },
  name: 'AcCard',
  props: {
    vertical: Boolean,
    column: {
      type: Number,
      default: 2
    },
    thumb: String
  }
};
exports.default = _default;