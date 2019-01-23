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

    return _c('label', {
      staticClass: "ac-radio",
      class: [_vm.border && _vm.size ? 'ac-radio--' + _vm.size : '', {
        'is-disabled': _vm.disabled
      }, {
        'is-focus': _vm.focus
      }, {
        'is-borderd': _vm.border
      }, {
        'is-checked': _vm.model === _vm.label
      }]
    }, [_c('span', {
      staticClass: "ac-radio__input",
      class: {
        'is-disabled': _vm.disabled,
        'is-checked': _vm.model === _vm.label
      }
    }, [_c('span', {
      staticClass: "ac-radio__inner"
    }), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.model,
        expression: "model"
      }],
      staticClass: "ac-radio__original",
      attrs: {
        "disabled": _vm.disabled,
        "type": "radio"
      },
      domProps: {
        "value": _vm.label,
        "checked": _vm._q(_vm.model, _vm.label)
      },
      on: {
        "change": function change($event) {
          _vm.model = _vm.label;
        }
      }
    })]), _c('span', {
      staticClass: "ac-radio__label"
    }, [_vm._t("default")], 2)]);
  },
  name: 'VRadio',
  componentName: 'VRadio',
  data: function data() {
    return {
      focus: false
    };
  },
  computed: {
    isGroup: function isGroup() {
      var parent = this.$parent;

      while (parent) {
        if (parent.$options.componentName !== 'VRadioGroup') {
          parent = parent.$parent;
        } else {
          this._radioGroup = parent;
          return true;
        }
      }

      return false;
    },
    model: {
      get: function get() {
        return this.isGroup ? this._radioGroup.value : this.value;
      },
      set: function set(val) {
        if (this.isGroup) {
          this._radioGroup.$emit('input', val);
        }

        this.$emit('input', val);
      }
    }
  },
  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean
  }
};
exports.default = _default;