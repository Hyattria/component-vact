"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('i', {
      class: "ac-icon-" + _vm.name,
      style: _vm.styleObj
    });
  },
  name: 'AcIcon',
  props: {
    name: String,
    color: String,
    size: String
  },
  components: {
    styleObj: function styleObj() {
      return {
        color: this.color,
        fontSize: this.size
      };
    }
  }
};
exports.default = _default;