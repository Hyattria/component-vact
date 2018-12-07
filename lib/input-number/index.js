"use strict";

exports.__esModule = true;
exports.default = void 0;

var _inputNumber = _interopRequireDefault(require("./src/input-number"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_inputNumber.default.install = function (Vue) {
  Vue.component(_inputNumber.default.name, _inputNumber.default);
};

var _default = _inputNumber.default;
exports.default = _default;