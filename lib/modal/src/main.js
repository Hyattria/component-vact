"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../../layer/index.js"));

var _default = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('transition', {
      attrs: {
        "enter-active-class": "animated pulse",
        "leave-active-class": "animated zoomOut"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.visible,
        expression: "visible"
      }],
      staticClass: "ac-modal",
      on: {
        "click": function click($event) {
          $event.stopPropagation();

          if ($event.target !== $event.currentTarget) {
            return null;
          }

          return _vm.close($event);
        }
      }
    }, [_c('div', {
      staticClass: "weui-dialog"
    }, [_c('div', {
      staticClass: "weui-dialog__hd ac-modal__hd"
    }, [_c('strong', {
      staticClass: "weui-dialog__title"
    }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
      staticClass: "weui-dialog__bd ac-modal__bd"
    }, [_vm._t("body", [_c('div', {
      domProps: {
        "innerHTML": _vm._s(_vm.description)
      }
    })])], 2), _c('div', {
      staticClass: "weui-dialog__cs",
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          return _vm.close($event);
        }
      }
    }, [_vm._t("close", [_c('i', {
      staticClass: "ac-icon-roundclose"
    })])], 2)])])]);
  },
  name: 'AcModal',
  mixins: [_index.default],
  props: {
    title: String,
    description: String,
    visible: Boolean
  },
  methods: {
    close: function close() {
      this.$emit('update:visible', false);
    }
  }
};
exports.default = _default;