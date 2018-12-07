"use strict";

exports.__esModule = true;
exports.default = void 0;

var _buttonGroup = _interopRequireDefault(require("../button/src/button-group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_buttonGroup.default.install = function (Vue) {
  Vue.component(_buttonGroup.default.name, _buttonGroup.default);
};

var _default = _buttonGroup.default;
exports.default = _default;