"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _item = _interopRequireDefault(require("../collapse/src/item"));

_item.default.install = function (Vue) {
  Vue.component(_item.default.name, _item.default);
};

var _default = _item.default;
exports.default = _default;