"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('header', {
      staticClass: "ac-header",
      style: {
        height: _vm.height
      }
    }, [_vm._t("default")], 2);
  },
  name: 'AcHeader',
  componentName: 'AcHeader',
  props: {
    height: {
      type: String,
      default: 'auto'
    }
  }
};
exports.default = _default;