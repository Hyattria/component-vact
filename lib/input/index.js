"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _input = _interopRequireDefault(require("./src/input"));

_input.default.install = function (Vue) {
  Vue.component(_input.default.name, _input.default);
};

var _default = _input.default;
exports.default = _default;