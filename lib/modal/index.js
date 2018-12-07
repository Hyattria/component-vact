"use strict";

exports.__esModule = true;
exports.default = void 0;

var _main = _interopRequireDefault(require("./src/main"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_main.default.install = function (Vue) {
  Vue.component(_main.default.name, _main.default);
};

var _default = _main.default;
exports.default = _default;