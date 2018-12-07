"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "weui-tabbar",
      style: {
        backgroundColor: _vm.background
      }
    }, [_vm._t("default")], 2);
  },
  name: 'AcTabbar',
  data: function data() {
    return {
      index: -1,
      currentIndex: -1
    };
  },
  props: {
    background: ''
  },
  mounted: function mounted() {
    if (this.value >= 0) {
      this.currentIndex = this.value;
    }

    this.updateIndex();
  },
  watch: {
    currentIndex: function currentIndex(val, oldVal) {
      oldVal > -1 && this.$children[oldVal] && (this.$children[oldVal].currentSelected = false);
      val > -1 && this.$children[val] && (this.$children[val].currentSelected = true);
    }
  },
  methods: {
    updateIndex: function updateIndex() {
      if (!this.$children || !this.$children.length) return;
      this.number = this.$children.length;
      var children = this.$children;

      for (var i = 0; i < children.length; i++) {
        children[i].currentIndex = i;

        if (children[i].currentSelected) {
          this.index = this.currentIndex = i;
        }
      }
    }
  }
};
exports.default = _default;