"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _main = _interopRequireDefault(require("./src/main"));

/* istanbul ignore next */
_main.default.install = function (Vue) {
  Vue.component(_main.default.name, _main.default);
};

var _default = _main.default;
exports.default = _default;