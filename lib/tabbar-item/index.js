"use strict";

exports.__esModule = true;
exports.default = void 0;

var _item = _interopRequireDefault(require("../tabbar/src/item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_item.default.install = function (Vue) {
  Vue.component(_item.default.name, _item.default);
};

var _default = _item.default;
exports.default = _default;