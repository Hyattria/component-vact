"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "ac-card__item",
      class: {
        'is-vertical': _vm.isVertical
      },
      style: {
        width: _vm.width
      }
    }, [_vm._t("prefix", [_c('div', {
      staticClass: "ac-card__prefix"
    }, [_c('img', {
      attrs: {
        "src": _vm.prefix
      }
    })])]), _vm.title || _vm.value ? _c('div', {
      staticClass: "ac-card__body"
    }, [_c('p', {
      staticClass: "ac-card__body-title"
    }, [_vm._v(_vm._s(_vm.title))]), _c('span', {
      staticClass: "ac-card__body-value"
    }, [_vm._v(_vm._s(_vm.value))]), _vm._t("body")], 2) : _vm._e(), _vm._t("default")], 2);
  },
  name: 'AcCardItem',
  props: {
    title: String,
    value: String,
    prefix: String
  },
  computed: {
    isVertical: function isVertical() {
      if (this.$parent.$options.name === 'AcCard') {
        return !this.$parent.$props.vertical;
      } else {
        return true;
      }
    },
    width: function width() {
      if (this.$parent.$props === 'AcCard') {
        return this.isVertical && 100 / this.$parent.$props.column - 1 + "%";
      }
    }
  }
};
exports.default = _default;