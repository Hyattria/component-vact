"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _carousel = _interopRequireDefault(require("./src/carousel"));

_carousel.default.install = function (Vue) {
  Vue.component(_carousel.default.name, _carousel.default);
};

var _default = _carousel.default;
exports.default = _default;