"use strict";

exports.__esModule = true;
exports.default = void 0;

var _input = _interopRequireDefault(require("./src/input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_input.default.install = function (Vue) {
  Vue.component(_input.default.name, _input.default);
};

var _default = _input.default;
exports.default = _default;