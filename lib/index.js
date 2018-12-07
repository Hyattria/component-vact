"use strict";

exports.__esModule = true;
exports.install = exports.default = void 0;

var _toast = _interopRequireDefault(require("./toast"));

var _loading = _interopRequireDefault(require("./loading"));

var _message = _interopRequireDefault(require("./message"));

var _confirm = _interopRequireDefault(require("./confirm"));

var _index = _interopRequireDefault(require("./icon/index"));

exports.AcIcon = _index.default;

var _index2 = _interopRequireDefault(require("./button-group/index"));

exports.AcButtonGroup = _index2.default;

var _index3 = _interopRequireDefault(require("./button/index"));

exports.AcButton = _index3.default;

var _index4 = _interopRequireDefault(require("./input/index"));

exports.AcInput = _index4.default;

var _container = _interopRequireDefault(require("./container"));

exports.AcContainer = _container.default;

var _header = _interopRequireDefault(require("./header"));

exports.AcHeader = _header.default;

var _main = _interopRequireDefault(require("./main"));

exports.AcMain = _main.default;

var _footer = _interopRequireDefault(require("./footer"));

exports.AcFooter = _footer.default;

var _swiper = _interopRequireDefault(require("./swiper"));

exports.AcSwiper = _swiper.default;

var _carousel = _interopRequireDefault(require("./carousel"));

exports.AcCarousel = _carousel.default;

var _cart = _interopRequireDefault(require("./cart"));

exports.AcCart = _cart.default;

var _tabbar = _interopRequireDefault(require("./tabbar"));

exports.AcTabbar = _tabbar.default;

var _tabbarItem = _interopRequireDefault(require("./tabbar-item"));

exports.AcTabbarItem = _tabbarItem.default;

var _circle = _interopRequireDefault(require("./circle"));

exports.AcCircle = _circle.default;

var _modal = _interopRequireDefault(require("./modal"));

exports.AcModal = _modal.default;

var _inputNumber = _interopRequireDefault(require("./input-number"));

exports.AcInputNumber = _inputNumber.default;

var _popup = _interopRequireDefault(require("./popup"));

exports.AcPopup = _popup.default;

var _group = _interopRequireDefault(require("./group"));

exports.AcGroup = _group.default;

var _cell = _interopRequireDefault(require("./cell"));

exports.AcCell = _cell.default;

var _progress = _interopRequireDefault(require("./progress"));

exports.AcProgress = _progress.default;

var _collapse = _interopRequireDefault(require("./collapse"));

exports.AcCollaspe = _collapse.default;

var _collapseItem = _interopRequireDefault(require("./collapse-item"));

exports.AcCollaspeItem = _collapseItem.default;

var _xcheckbox = _interopRequireDefault(require("./xcheckbox"));

exports.AcXcheckbox = _xcheckbox.default;

var _xswitch = _interopRequireDefault(require("./xswitch"));

exports.AcXswitch = _xswitch.default;

var _card = require("./card");

exports.Card = _card.Card;
exports.CardItem = _card.CardItem;
exports.CardPrefix = _card.CardPrefix;
exports.CardBody = _card.CardBody;

var _radio = require("./radio");

exports.Radio = _radio.Radio;
exports.RadioGroup = _radio.RadioGroup;
exports.RadioButton = _radio.RadioButton;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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