"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _default = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('label', {
      staticClass: "weui-cell weui-check__label",
      on: {
        "click": _vm.toClick
      }
    }, [_c('div', {
      staticClass: "weui-cell__hd"
    }, [_vm.position !== 'hd' ? _vm._t("hd") : _vm._e(), _vm.type === 'checkbox' && _vm.position === 'hd' ? _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.model,
        expression: "model"
      }],
      staticClass: "weui-check",
      attrs: {
        "name": "checkbox1",
        "type": "checkbox"
      },
      domProps: {
        "value": _vm.label,
        "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, _vm.label) > -1 : _vm.model
      },
      on: {
        "change": function change($event) {
          var $$a = _vm.model,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;

          if (Array.isArray($$a)) {
            var $$v = _vm.label,
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
    }) : _vm.type === 'radio' && _vm.position === 'hd' ? _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.model,
        expression: "model"
      }],
      staticClass: "weui-check",
      attrs: {
        "name": "checkbox1",
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
    }) : _vm.position === 'hd' ? _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.model,
        expression: "model"
      }],
      staticClass: "weui-check",
      attrs: {
        "name": "checkbox1",
        "type": _vm.type
      },
      domProps: (0, _defineProperty2.default)({
        "value": _vm.label
      }, "value", _vm.model),
      on: {
        "input": function input($event) {
          if ($event.target.composing) {
            return;
          }

          _vm.model = $event.target.value;
        }
      }
    }) : _vm._e(), _vm.position === 'hd' ? _c('i', {
      staticClass: "weui-icon-checked"
    }) : _vm._e()], 2), _c('div', {
      staticClass: "weui-cell__bd"
    }, [_vm._t("default")], 2), _c('div', {
      staticClass: "weui-cell__ft"
    }, [_vm.position !== 'ft' ? _vm._t("ft") : _vm._e(), _vm.type === 'checkbox' && _vm.position === 'ft' ? _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.model,
        expression: "model"
      }],
      staticClass: "weui-check",
      attrs: {
        "name": "checkbox1",
        "type": "checkbox"
      },
      domProps: {
        "value": _vm.label,
        "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, _vm.label) > -1 : _vm.model
      },
      on: {
        "change": function change($event) {
          var $$a = _vm.model,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;

          if (Array.isArray($$a)) {
            var $$v = _vm.label,
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
    }) : _vm.type === 'radio' && _vm.position === 'ft' ? _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.model,
        expression: "model"
      }],
      staticClass: "weui-check",
      attrs: {
        "name": "checkbox1",
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
    }) : _vm.position === 'ft' ? _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.model,
        expression: "model"
      }],
      staticClass: "weui-check",
      attrs: {
        "name": "checkbox1",
        "type": _vm.type
      },
      domProps: (0, _defineProperty2.default)({
        "value": _vm.label
      }, "value", _vm.model),
      on: {
        "input": function input($event) {
          if ($event.target.composing) {
            return;
          }

          _vm.model = $event.target.value;
        }
      }
    }) : _vm._e(), _vm.position === 'ft' ? _c('i', {
      staticClass: "weui-icon-checked"
    }) : _vm._e()], 2)]);
  },
  name: 'AcXcheckbox',
  props: {
    value: {},
    label: {},
    type: {
      type: String,
      default: 'checkbox'
    },
    position: {
      type: String,
      default: 'hd'
    }
  },
  computed: {
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        this.$emit('input', val);
      }
    }
  },
  methods: {
    toClick: function toClick() {
      this.$emit('click');
    }
  }
};
exports.default = _default;