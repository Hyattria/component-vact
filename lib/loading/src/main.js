"use strict";

exports.__esModule = true;
exports.default = void 0;

var _layerMixin = _interopRequireDefault(require("../../layer/layerMixin.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('transition', {
      attrs: {
        "name": "fade"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.visible,
        expression: "visible"
      }],
      staticClass: "ac-mark ng-scope"
    }, [_c('div', {
      staticClass: "ac-pacman"
    }, [_c('div', _vm._l(3, function (itme) {
      return _c('div', {
        key: itme,
        style: {
          backgroundColor: _vm.color
        }
      });
    })), _c('div', _vm._l(2, function (itme) {
      return _c('div', {
        key: itme,
        style: {
          backgroundColor: _vm.background
        }
      });
    }))])])]);
  },
  name: 'AcLoading',
  mixins: [_layerMixin.default],
  data: function data() {
    return {
      text: 'loading'
    };
  },
  props: {
    color: {
      type: String,
      default: '#5bc0de'
    },
    background: {
      type: String,
      default: '#337ab7'
    }
  }
};
exports.default = _default;