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

    return _c('div', {
      staticClass: "weui-cell weui-cell_switch"
    }, [_c('div', {
      staticClass: "weui-cell__bd"
    }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
      staticClass: "weui-cell__ft"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.model,
        expression: "model"
      }],
      staticClass: "weui-switch",
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, null) > -1 : _vm.model
      },
      on: {
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
    })])]);
  },
  name: 'AcXswitch',
  props: {
    title: String,
    value: {}
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
  }
};
exports.default = _default;