"use strict";

exports.__esModule = true;
exports.default = void 0;

var _emitter = _interopRequireDefault(require("./emitter"));

var _migrating = _interopRequireDefault(require("./migrating.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: [_vm.type === 'textarea' ? 'ac-textarea' : 'ac-input', _vm.type !== 'textarea' && _vm.status ? 'ac-input--' + _vm.status : '', _vm.size ? 'ac-input--' + _vm.size : '', {
        'ac-disabled': _vm.disabled,
        'ac-input-group': _vm.$slots.prepend || _vm.$slots.append,
        'ac-input-group--append': _vm.$slots.append,
        'ac-input-group--prepend': _vm.$slots.prepend,
        'ac-input--prefix': _vm.$slots.prefix || _vm.prefixIcon,
        'ac-input--suffix': _vm.$slots.suffix || _vm.suffixIcon || _vm.clearable || _vm.status
      }],
      on: {
        "mouseenter": function mouseenter($event) {
          _vm.hovering = true;
        },
        "mouseleave": function mouseleave($event) {
          _vm.hovering = false;
        }
      }
    }, [_vm.type !== 'textarea' ? [_vm.$slots.prepend ? _c('div', {
      staticClass: "ac-input-group__prepend"
    }, [_vm._t("prepend")], 2) : _vm._e(), _vm.type === 'checkbox' ? _c('input', _vm._b({
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.model,
        expression: "model"
      }],
      staticClass: "ac-input__inner",
      class: [_vm.status ? 'ac-input__status--' + _vm.status : '', {
        'is-round': _vm.round
      }],
      attrs: {
        "placeholder": _vm.placeholder,
        "disabled": _vm.disabled,
        "type": "checkbox"
      },
      domProps: {
        "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, null) > -1 : _vm.model
      },
      on: {
        "focus": _vm.handleFocus,
        "blur": _vm.handleBlur,
        "change": function change($event) {
          var $$a = _vm.model,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;

          if (Array.isArray($$a)) {
            var $$v = null,
                $$i = _vm._i($$a, $$v);

            if ($$el.checked) {
              $$i < 0 && (_vm.model = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.model = $$c;
          }
        }
      }
    }, 'input', _vm.$attrs, false)) : _vm.type === 'radio' ? _c('input', _vm._b({
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.model,
        expression: "model"
      }],
      staticClass: "ac-input__inner",
      class: [_vm.status ? 'ac-input__status--' + _vm.status : '', {
        'is-round': _vm.round
      }],
      attrs: {
        "placeholder": _vm.placeholder,
        "disabled": _vm.disabled,
        "type": "radio"
      },
      domProps: {
        "checked": _vm._q(_vm.model, null)
      },
      on: {
        "focus": _vm.handleFocus,
        "blur": _vm.handleBlur,
        "change": function change($event) {
          _vm.model = null;
        }
      }
    }, 'input', _vm.$attrs, false)) : _c('input', _vm._b({
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.model,
        expression: "model"
      }],
      staticClass: "ac-input__inner",
      class: [_vm.status ? 'ac-input__status--' + _vm.status : '', {
        'is-round': _vm.round
      }],
      attrs: {
        "placeholder": _vm.placeholder,
        "disabled": _vm.disabled,
        "type": _vm.type
      },
      domProps: {
        "value": _vm.model
      },
      on: {
        "focus": _vm.handleFocus,
        "blur": _vm.handleBlur,
        "input": function input($event) {
          if ($event.target.composing) {
            return;
          }

          _vm.model = $event.target.value;
        }
      }
    }, 'input', _vm.$attrs, false)), _vm.$slots.prefix || _vm.prefixIcon ? _c('span', {
      staticClass: "ac-input__prefix"
    }, [_vm._t("prefix"), _vm.prefixIcon ? _c('i', {
      staticClass: "ac-input__icon",
      class: _vm.prefixIcon
    }) : _vm._e()], 2) : _vm._e(), _vm.$slots.suffix || _vm.suffixIcon || _vm.showClear || _vm.status ? _c('span', {
      staticClass: "ac-input__suffix"
    }, [_c('span', {
      staticClass: "ac-input__suffix-inner"
    }, [!_vm.showClear ? [_vm._t("suffix"), _vm.suffixIcon ? _c('i', {
      staticClass: "ac-input__icon",
      class: _vm.suffixIcon
    }) : _vm._e()] : _c('i', {
      staticClass: "ac-input__icon ac-icon-roundclose ac-input__clear",
      on: {
        "click": _vm.clear
      }
    }), _vm.status ? [_c('i', {
      staticClass: "ac-input__icon",
      class: _vm.statusIcon,
      style: _vm.statusColor
    })] : _vm._e()], 2)]) : _vm._e(), _vm.$slots.append ? _c('div', {
      staticClass: "ac-input-group__append"
    }, [_vm._t("append")], 2) : _vm._e()] : _c('textarea', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.model,
        expression: "model"
      }],
      staticClass: "ac-textarea__inner",
      attrs: {
        "rows": _vm.row
      },
      domProps: {
        "value": _vm.model
      },
      on: {
        "input": function input($event) {
          if ($event.target.composing) {
            return;
          }

          _vm.model = $event.target.value;
        }
      }
    })], 2);
  },
  name: 'AcInput',
  data: function data() {
    return {
      focus: false,
      hovering: false
    };
  },
  mixins: [_emitter.default, _migrating.default],
  props: {
    value: {},
    placeholder: String,
    disabled: Boolean,
    round: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    size: String,
    prefixIcon: String,
    suffixIcon: String,
    status: String,
    clearable: {
      type: Boolean,
      default: false
    },
    row: Number
  },
  computed: {
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        this.$emit('input', val);
      }
    },
    showClear: function showClear() {
      return this.clearable && !this.disabled && !this.readonly && (this.focus || this.hovering);
    },
    statusIcon: function statusIcon() {
      switch (this.status) {
        case 'success':
          return 'ac-icon-roundcheckfill';

        case 'error':
          return 'ac-icon-roundclosefill';

        case 'warning':
          return 'ac-icon-warningfill';

        case 'info':
          return 'ac-icon-infofill';
      }
    },
    statusColor: function statusColor() {
      switch (this.status) {
        case 'success':
          return {
            color: '#97c625'
          };

        case 'error':
          return {
            color: '#f56c6c'
          };

        case 'warning':
          return {
            color: '#e6a23c'
          };

        case 'info':
          return {
            color: '#909399'
          };
      }
    }
  },
  methods: {
    handleFocus: function handleFocus(event) {
      this.focus = true;
      this.$emit('focus', event);
    },
    handleBlur: function handleBlur(event) {
      this.focus = false;
      this.$emit('blur', event);
    },
    clear: function clear() {
      this.$emit('input', '');
    }
  }
};
exports.default = _default;