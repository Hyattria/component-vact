"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cart = _interopRequireDefault(require("./src/cart"));

_cart.default.install = function (Vue) {
  Vue.component(_cart.default.name, _cart.default);
};

var _default = _cart.default;
exports.default = _default;