"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _dom = require("../../../utils/dom");

var _main = _interopRequireDefault(require("./main"));

var Mask = _vue.default.extend(_main.default);

var loadingDirective = {};

var _default = loadingDirective.install = function (Vue) {
  var toggleLoading = function toggleLoading(el, binding) {
    if (binding.value) {
      Vue.nextTick(function () {
        if (binding.modifiers.fullscreen) {
          el.originalPosition = (0, _dom.getStyle)(document.body, 'position');
          el.originalOverflow = (0, _dom.getStyle)(document.body, 'overflow');
          el.maskStyle.zIndex = 2000;
          (0, _dom.addClass)(el.mask, 'is-fullscreen');
          insertDom(document.body, el, binding);
        } else {}
      });
    }
  };

  var insertDom = function insertDom(parent, el, binding) {
    if (!el.domVisible && (0, _dom.getStyle)(el, 'display') !== 'none' && (0, _dom.getStyle)(el, 'visibility') !== 'hidden') {
      Object.keys(el.maskStyle).forEach(function (property) {
        el.mask.style[property] = el.maskStyle[property];
      });
    }

    el.domVisible = true;
    parent.appendChild(el.mask);
    Vue.nextTick(function () {
      if (el.instance.hiding) {
        el.instance.$emit('after-leave');
      } else {
        el.instance.visible = true;
      }
    });
    el.domInserted = true;
  };

  Vue.directive('loading', {
    bind: function bind(el, binding, vnode) {
      var mask = new Mask({
        el: document.createElement('div')
      });
      el.instance = mask;
      el.mask = mask.$el;
      el.maskStyle = {};
      console.log(binding);
      binding.vaule && toggleLoading(el, binding);
    }
  });
};

exports.default = _default;