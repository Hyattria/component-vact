import Vue from 'vue';
import Message from './src/main';

Message.create = function (options) {
  if (options === undefined || options === null) {
    options = {
      text: ''
    };
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      text: options
    };
  }

  var _Message = Vue.extend(Message);

  var component = new _Message({
    propsData: options
  }).$mount(); // component.visiable = true®

  document.querySelector('body').appendChild(component.$el);
  return component;
};

export default Message;