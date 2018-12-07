"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "ac-circle",
      style: _vm.styleObject
    }, [_c('div', {
      staticClass: "ac-circle__content"
    }, [_c('svg', {
      style: _vm.styleObject,
      attrs: {
        "viewBox": "0 0 94 94"
      }
    }, [_c('path', {
      attrs: {
        "d": "M 24 74 a 37 37 0 1 1 40 0",
        "stroke-linecap": "round",
        "stroke": "#ebeef5",
        "stroke-width": "6.8",
        "fill": "none"
      }
    }), _c('path', {
      staticClass: "el-progress-circle__path",
      staticStyle: {
        "stroke-dasharray": "191 191",
        "stroke-dashoffset": "-191",
        "transition": "stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease"
      },
      style: {
        strokeDashoffset: _vm.offset
      },
      attrs: {
        "d": "M 24 74 a 37 37 0 1 1 40 0",
        "stroke-linecap": "round",
        "stroke": _vm.color || '#E63B3F',
        "stroke-width": "6.8",
        "fill": "none"
      }
    })])]), _c('div', {
      staticClass: "ac-circle__text"
    }, [_c('div', [_vm._v(_vm._s(_vm.value))]), _c('div', [_vm._v(_vm._s(_vm.percentage) + "%")])])]);
  },
  name: 'AcCircle',
  data: function data() {
    return {
      styleObject: {
        width: this.width,
        height: this.height
      }
    };
  },
  computed: {
    offset: function offset() {
      return -(191 + 191 * (this.percentage / 100));
    }
  },
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    value: {
      type: String,
      default: '已抢'
    },
    color: String,
    width: {
      type: String,
      default: '4.5rem'
    },
    height: {
      type: String,
      default: '4.5rem'
    }
  }
};
exports.default = _default;