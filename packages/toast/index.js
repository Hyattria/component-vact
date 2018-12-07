import Vue from 'vue'
import Toast from './src/main'

Toast.create = function (options) {
  if (options === undefined || options === null) {
    options = {
      message: ''
    }
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      message: options
    }
  }
  var _Toast = Vue.extend(Toast)
  var component = new _Toast({
    propsData: options
  }).$mount()
  document.querySelector('body').appendChild(component.$el)

  return component
}

export default Toast
