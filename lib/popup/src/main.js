"use strict";

exports.__esModule = true;
exports.default = void 0;

var _layer = _interopRequireDefault(require("../../layer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('transition', {
      attrs: {
        "leave-active-class": "weui-animate-slide-down"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.visible,
        expression: "visible"
      }],
      staticClass: "weui-picker ac-popup",
      class: {
        'weui-animate-slide-up': _vm.visible
      }
    }, [_c('div', {
      staticClass: "ac-popup__icon"
    }, [_c('i', {
      staticClass: "ac-icon-close",
      on: {
        "click": _vm.close
      }
    })]), _c('div', {
      staticClass: "weui-picker__hd"
    }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
      staticClass: "weui-picker__bd"
    }, [_vm._t("default")], 2)])]);
  },
  name: 'AcPopup',
  mixins: [_layer.default],
  props: {
    visible: Boolean,
    title: String
  },
  methods: {
    close: function close() {
      this.$emit('update:visible', false);
    }
  }
};
exports.default = _default;