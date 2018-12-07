"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _main = _interopRequireDefault(require("./src/main"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_main.default.create = function (options) {
  if (options === undefined || options === null) {
    options = {
      text: ''
    };
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      text: options
    };
  }

  var _Message = _vue.default.extend(_main.default);

  var component = new _Message({
    propsData: options
  }).$mount(); // component.visiable = true®

  document.querySelector('body').appendChild(component.$el);
  return component;
};

var _default = _main.default;
exports.default = _default;