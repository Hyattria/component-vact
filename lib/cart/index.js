"use strict";

exports.__esModule = true;
exports.default = void 0;

var _cart = _interopRequireDefault(require("./src/cart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_cart.default.install = function (Vue) {
  Vue.component(_cart.default.name, _cart.default);
};

var _default = _cart.default;
exports.default = _default;