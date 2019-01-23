"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('a', {
      staticClass: "weui-tabbar__item",
      class: {
        'weui-bar__item_on': _vm.isActive
      },
      attrs: {
        "href": "javascript:;"
      },
      on: {
        "click": _vm.onItemClick
      }
    }, [_c('div', {
      staticClass: "weui-tabbar__icon"
    }, [!_vm.isActive ? _vm._t("icon") : _vm._e(), _vm.isActive ? _vm._t("icon-active") : _vm._e()], 2), _c('p', {
      staticClass: "weui-tabbar__label"
    }, [_vm._t("label")], 2)]);
  },
  name: 'AcTabbarItem',
  data: function data() {
    return {
      currentIndex: -1,
      currentSelected: this.selected
    };
  },
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isActive: function isActive() {
      return this.$parent.index === this.currentIndex;
    }
  },
  methods: {
    onItemClick: function onItemClick() {
      this.$parent.currentIndex = this.currentIndex;
      this.$emit('click');
    }
  },
  watch: {
    currentSelected: function currentSelected(val) {
      if (val) {
        this.$parent.index = this.currentIndex;
      }
    }
  }
};
exports.default = _default;