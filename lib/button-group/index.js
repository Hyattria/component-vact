"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _buttonGroup = _interopRequireDefault(require("../button/src/button-group"));

_buttonGroup.default.install = function (Vue) {
  Vue.component(_buttonGroup.default.name, _buttonGroup.default);
};

var _default = _buttonGroup.default;
exports.default = _default;