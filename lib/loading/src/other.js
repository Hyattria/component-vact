"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('transition', {
      attrs: {
        "name": "fade"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.visible,
        expression: "visible"
      }],
      staticClass: "ac-mark ng-scope"
    }, [_c('div', {
      staticClass: "lds-css ng-scope"
    }, [_c('div', {
      staticClass: "lds-flickr",
      staticStyle: {
        "width": "100%",
        "height": "100%"
      }
    }, [_c('div'), _c('div'), _c('div')])])])]);
  }
};
exports.default = _default;