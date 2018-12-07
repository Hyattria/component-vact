import Vue from 'vue'
import Confirm from './src/main'

Confirm.create = function (options) {
  if (options === undefined || options === null) {
    options = {
      text: ''
    }
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      text: options
    }
  }
  var _Confirm = Vue.extend(Confirm)
  var component = new _Confirm({
    propsData: options
  }).$mount()

  document.querySelector('body').appendChild(component.$el)

  return component
}

export default Confirm
