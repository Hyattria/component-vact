"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('label', {
      staticClass: "ac-radio-button",
      class: [{
        'is-disabled': _vm.disabled
      }, {
        'is-active': _vm.value === _vm.label
      }]
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.value,
        expression: "value"
      }],
      staticClass: "ac-radio-button__orig-radio",
      attrs: {
        "type": "radio",
        "name": _vm.name
      },
      domProps: {
        "value": _vm.label,
        "checked": _vm._q(_vm.value, _vm.label)
      },
      on: {
        "change": function change($event) {
          _vm.value = _vm.label;
        }
      }
    }), _c('span', {
      staticClass: "ac-radio-button__inner",
      style: _vm.value === _vm.label ? _vm.activeStyle : null
    }, [_vm._t("default"), !_vm.$slots.default ? void 0 : _vm._e()], 2)]);
  },
  name: 'AcRadioButton',
  componentName: 'AcRadioButton',
  props: {
    label: {},
    disabled: Boolean,
    round: Boolean,
    name: String
  },
  data: function data() {
    return {
      focus: String
    };
  },
  computed: {
    value: {
      get: function get() {
        return this._radioGroup.value;
      },
      set: function set(val) {
        this._radioGroup.$emit('input', val);
      }
    },
    _radioGroup: function _radioGroup() {
      var parent = this.$parent;

      while (parent) {
        if (parent.$options.componentName !== 'AcRadioGroup') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }

      return false;
    },
    activeStyle: function activeStyle() {
      return {
        backgroundColor: this._radioGroup.fill || '',
        borderColor: this._radioGroup.fill || '',
        boxShadow: this._radioGroup.fill ? "-1px 0 0 0 " + this._radioGroup.fill : '',
        color: this._radioGroup.textColor || ''
      };
    }
  }
};
exports.default = _default;