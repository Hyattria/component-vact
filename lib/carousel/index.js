"use strict";

exports.__esModule = true;
exports.default = void 0;

var _carousel = _interopRequireDefault(require("./src/carousel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_carousel.default.install = function (Vue) {
  Vue.component(_carousel.default.name, _carousel.default);
};

var _default = _carousel.default;
exports.default = _default;