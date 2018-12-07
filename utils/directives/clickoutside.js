import { on } from 'vue-freedom/src/utils/dom'

const ctx = '@@clickoutsideContext';

/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */

export default {
  bind (el, binding, vnode) {
    console.log(vnode)
    console.log(el)
  }
}
