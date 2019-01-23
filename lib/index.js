"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AcIcon", {
  enumerable: true,
  get: function get() {
    return _index.default;
  }
});
Object.defineProperty(exports, "AcButtonGroup", {
  enumerable: true,
  get: function get() {
    return _index2.default;
  }
});
Object.defineProperty(exports, "AcButton", {
  enumerable: true,
  get: function get() {
    return _index3.default;
  }
});
Object.defineProperty(exports, "AcInput", {
  enumerable: true,
  get: function get() {
    return _index4.default;
  }
});
Object.defineProperty(exports, "AcContainer", {
  enumerable: true,
  get: function get() {
    return _container.default;
  }
});
Object.defineProperty(exports, "AcHeader", {
  enumerable: true,
  get: function get() {
    return _header.default;
  }
});
Object.defineProperty(exports, "AcMain", {
  enumerable: true,
  get: function get() {
    return _main.default;
  }
});
Object.defineProperty(exports, "AcFooter", {
  enumerable: true,
  get: function get() {
    return _footer.default;
  }
});
Object.defineProperty(exports, "AcSwiper", {
  enumerable: true,
  get: function get() {
    return _swiper.default;
  }
});
Object.defineProperty(exports, "AcCarousel", {
  enumerable: true,
  get: function get() {
    return _carousel.default;
  }
});
Object.defineProperty(exports, "AcCart", {
  enumerable: true,
  get: function get() {
    return _cart.default;
  }
});
Object.defineProperty(exports, "AcTabbar", {
  enumerable: true,
  get: function get() {
    return _tabbar.default;
  }
});
Object.defineProperty(exports, "AcTabbarItem", {
  enumerable: true,
  get: function get() {
    return _tabbarItem.default;
  }
});
Object.defineProperty(exports, "AcCircle", {
  enumerable: true,
  get: function get() {
    return _circle.default;
  }
});
Object.defineProperty(exports, "AcModal", {
  enumerable: true,
  get: function get() {
    return _modal.default;
  }
});
Object.defineProperty(exports, "AcInputNumber", {
  enumerable: true,
  get: function get() {
    return _inputNumber.default;
  }
});
Object.defineProperty(exports, "AcPopup", {
  enumerable: true,
  get: function get() {
    return _popup.default;
  }
});
Object.defineProperty(exports, "AcGroup", {
  enumerable: true,
  get: function get() {
    return _group.default;
  }
});
Object.defineProperty(exports, "AcCell", {
  enumerable: true,
  get: function get() {
    return _cell.default;
  }
});
Object.defineProperty(exports, "AcProgress", {
  enumerable: true,
  get: function get() {
    return _progress.default;
  }
});
Object.defineProperty(exports, "AcCollaspe", {
  enumerable: true,
  get: function get() {
    return _collapse.default;
  }
});
Object.defineProperty(exports, "AcCollaspeItem", {
  enumerable: true,
  get: function get() {
    return _collapseItem.default;
  }
});
Object.defineProperty(exports, "AcXcheckbox", {
  enumerable: true,
  get: function get() {
    return _xcheckbox.default;
  }
});
Object.defineProperty(exports, "AcXswitch", {
  enumerable: true,
  get: function get() {
    return _xswitch.default;
  }
});
Object.defineProperty(exports, "Card", {
  enumerable: true,
  get: function get() {
    return _card.Card;
  }
});
Object.defineProperty(exports, "CardItem", {
  enumerable: true,
  get: function get() {
    return _card.CardItem;
  }
});
Object.defineProperty(exports, "CardPrefix", {
  enumerable: true,
  get: function get() {
    return _card.CardPrefix;
  }
});
Object.defineProperty(exports, "CardBody", {
  enumerable: true,
  get: function get() {
    return _card.CardBody;
  }
});
Object.defineProperty(exports, "Radio", {
  enumerable: true,
  get: function get() {
    return _radio.Radio;
  }
});
Object.defineProperty(exports, "RadioGroup", {
  enumerable: true,
  get: function get() {
    return _radio.RadioGroup;
  }
});
Object.defineProperty(exports, "RadioButton", {
  enumerable: true,
  get: function get() {
    return _radio.RadioButton;
  }
});
exports.install = exports.default = void 0;

var _toast = _interopRequireDefault(require("./toast"));

var _loading = _interopRequireDefault(require("./loading"));

var _message = _interopRequireDefault(require("./message"));

var _confirm = _interopRequireDefault(require("./confirm"));

var _index = _interopRequireDefault(require("./icon/index"));

var _index2 = _interopRequireDefault(require("./button-group/index"));

var _index3 = _interopRequireDefault(require("./button/index"));

var _index4 = _interopRequireDefault(require("./input/index"));

var _container = _interopRequireDefault(require("./container"));

var _header = _interopRequireDefault(require("./header"));

var _main = _interopRequireDefault(require("./main"));

var _footer = _interopRequireDefault(require("./footer"));

var _swiper = _interopRequireDefault(require("./swiper"));

var _carousel = _interopRequireDefault(require("./carousel"));

var _cart = _interopRequireDefault(require("./cart"));

var _tabbar = _interopRequireDefault(require("./tabbar"));

var _tabbarItem = _interopRequireDefault(require("./tabbar-item"));

var _circle = _interopRequireDefault(require("./circle"));

var _modal = _interopRequireDefault(require("./modal"));

var _inputNumber = _interopRequireDefault(require("./input-number"));

var _popup = _interopRequireDefault(require("./popup"));

var _group = _interopRequireDefault(require("./group"));

var _cell = _interopRequireDefault(require("./cell"));

var _progress = _interopRequireDefault(require("./progress"));

var _collapse = _interopRequireDefault(require("./collapse"));

var _collapseItem = _interopRequireDefault(require("./collapse-item"));

var _xcheckbox = _interopRequireDefault(require("./xcheckbox"));

var _xswitch = _interopRequireDefault(require("./xswitch"));

var _card = require("./card");

var _radio = require("./radio");

var components = [_index.default, _index3.default, _index2.default, _index4.default, _swiper.default, _carousel.default, _cart.default, _container.default, _header.default, _main.default, _footer.default, _tabbar.default, _tabbarItem.default, _circle.default, _modal.default, _inputNumber.default, _cell.default, _popup.default, _group.default, _progress.default, _xcheckbox.default, _xswitch.default, _card.Card, _card.CardItem, _card.CardPrefix, _card.CardBody, _collapse.default, _collapseItem.default, _radio.Radio, _radio.RadioGroup, _radio.RadioButton];
/**
 * 添加 install 方法
 * @param {*} Vue
 */

var install = function install(Vue) {
  components.map(function (component) {
    return Vue.component(component.name, component);
  });
  Vue.use(_loading.default.directive);
  Vue.prototype.$toast = _toast.default.create;
  Vue.prototype.$loading = _loading.default.create;
  Vue.prototype.$message = _message.default.create;
  Vue.prototype.$confirm = _confirm.default.create;
};

exports.install = install;
var _default = {
  install: install
};
exports.default = _default;