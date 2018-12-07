import Vue from 'vue';
import { addClass, getStyle } from '../../../utils/dom';
import Loading from './main';
var Mask = Vue.extend(Loading);
var loadingDirective = {};
export default loadingDirective.install = function (Vue) {
  var toggleLoading = function toggleLoading(el, binding) {
    if (binding.value) {
      Vue.nextTick(function () {
        if (binding.modifiers.fullscreen) {
          el.originalPosition = getStyle(document.body, 'position');
          el.originalOverflow = getStyle(document.body, 'overflow');
          el.maskStyle.zIndex = 2000;
          addClass(el.mask, 'is-fullscreen');
          insertDom(document.body, el, binding);
        } else {}
      });
    }
  };

  var insertDom = function insertDom(parent, el, binding) {
    if (!el.domVisible && getStyle(el, 'display') !== 'none' && getStyle(el, 'visibility') !== 'hidden') {
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