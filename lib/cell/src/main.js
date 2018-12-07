"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "a\bc-cell",
      on: {
        "click": _vm.click
      }
    }, [_vm._t("icon"), _vm.title || _vm.$slots.title ? _c('div', {
      staticClass: "ac-cell__title"
    }, [_vm._t("title", [_c('span', {
      domProps: {
        "textContent": _vm._s(_vm.title)
      }
    }), _vm.label ? _c('div', {
      staticClass: "ac-cell__label",
      domProps: {
        "textContent": _vm._s(_vm.label)
      }
    }) : _vm._e()])], 2) : _vm._e(), _vm.value || _vm.$slots.default ? _c('div', {
      staticClass: "ac-cell__value"
    }, [_vm._t("default", [_c('span', {
      domProps: {
        "textContent": _vm._s(_vm.value)
      }
    })])], 2) : _vm._e(), _vm.end || _vm.isLink ? _vm._t("default", [_c('span', {
      domProps: {
        "textContent": _vm._s(_vm.end)
      }
    })]) : _vm._e()], 2);
  },
  name: 'AcCell',
  props: {
    title: String,
    label: String,
    end: String,
    isLink: Boolean,
    value: [String, Number]
  },
  methods: {
    click: function click() {
      this.$emit('click');
    }
  }
};
exports.default = _default;