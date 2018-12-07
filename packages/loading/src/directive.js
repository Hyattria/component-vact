import Vue from 'vue'
import { addClass, getStyle } from '../../../utils/dom'
import Loading from './main'

const Mask = Vue.extend(Loading)
const loadingDirective = {}

export default loadingDirective.install = Vue => {
  const toggleLoading = (el, binding) => {
    if (binding.value) {
      Vue.nextTick(() => {
        if (binding.modifiers.fullscreen) {
          el.originalPosition = getStyle(document.body, 'position')
          el.originalOverflow = getStyle(document.body, 'overflow')
          el.maskStyle.zIndex = 2000
          addClass(el.mask, 'is-fullscreen')
          insertDom(document.body, el, binding)
        } else {
        }
      })
    }
  }

  const insertDom = (parent, el, binding) => {
    if (!el.domVisible && getStyle(el, 'display') !== 'none' && getStyle(el, 'visibility') !== 'hidden') {
      Object.keys(el.maskStyle).forEach(property => {
        el.mask.style[property] = el.maskStyle[property]
      })
    }
    el.domVisible = true
    parent.appendChild(el.mask)
    Vue.nextTick(() => {
      if (el.instance.hiding) {
        el.instance.$emit('after-leave')
      } else {
        el.instance.visible = true
      }
    })
    el.domInserted = true
  }

  Vue.directive('loading', {
    bind: function (el, binding, vnode) {
      const mask = new Mask({
        el: document.createElement('div')
      })
      el.instance = mask
      el.mask = mask.$el
      el.maskStyle = {}
      console.log(binding)
      binding.vaule && toggleLoading(el, binding)
    }
  })
}
