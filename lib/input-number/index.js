"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inputNumber = _interopRequireDefault(require("./src/input-number"));

_inputNumber.default.install = function (Vue) {
  Vue.component(_inputNumber.default.name, _inputNumber.default);
};

var _default = _inputNumber.default;
exports.default = _default;