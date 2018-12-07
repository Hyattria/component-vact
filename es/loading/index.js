import Vue from 'vue';
import Loading from './src/main';
import directive from './src/directive';

Loading.create = function (options) {
  if (options === undefined || options === null) {
    options = {
      text: ''
    };
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      text: options
    };
  }

  var _Loading = Vue.extend(Loading);

  var component = new _Loading({
    propsData: options
  }).$mount();
  document.querySelector('body').appendChild(component.$el);
  return component;
};

Loading.directive = directive;
export default Loading;