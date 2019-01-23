"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _button = _interopRequireDefault(require("./src/button"));

_button.default.install = function (Vue) {
  Vue.component(_button.default.name, _button.default);
};

var _default = _button.default;
exports.default = _default;