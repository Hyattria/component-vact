"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _swiper = _interopRequireDefault(require("./src/swiper"));

_swiper.default.install = function (Vue) {
  Vue.component(_swiper.default.name, _swiper.default);
};

var _default = _swiper.default;
exports.default = _default;