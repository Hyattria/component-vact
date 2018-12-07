"use strict";

exports.__esModule = true;
exports.default = void 0;

var _swiper = _interopRequireDefault(require("./src/swiper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_swiper.default.install = function (Vue) {
  Vue.component(_swiper.default.name, _swiper.default);
};

var _default = _swiper.default;
exports.default = _default;