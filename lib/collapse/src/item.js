"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "ac-collapse__item"
    }, [_c('div', {
      class: ['weui-cell', 'weui-cell_access', {
        'is-expanded': _vm.expanded
      }],
      on: {
        "click": _vm.click
      }
    }, [_c('div', {
      staticClass: "weui-cell__hd"
    }, [_vm._t("icon"), _vm._t("hd", [_vm._v(_vm._s(_vm.title))])], 2), _c('div', {
      staticClass: "weui-cell__bd"
    }, [_vm._t("bd")], 2), _c('div', {
      staticClass: "weui-cell__ft"
    }, [_vm._t("ft", [_vm._v(_vm._s(_vm.value))])], 2)]), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.show,
        expression: "show"
      }],
      ref: "wrapper",
      staticClass: "ac-collapse__item--wrapper",
      on: {
        "transitionend": _vm.onTransitionEnd
      }
    }, [_c('div', {
      ref: "content",
      staticClass: "ac-collapse__item--content"
    }, [_vm._t("default")], 2)])]);
  },
  name: 'AcCollapseItem',
  data: function data() {
    return {
      show: null,
      parent: null,
      expanded: false
    };
  },
  props: {
    access: Boolean,
    title: String,
    value: String
  },
  created: function created() {
    this.findParent('AcCollapse');
    this.show = this.expanded;
  },
  watch: {
    expanded: function expanded(_expanded, prev) {
      var _this = this;

      if (prev === null) {
        return;
      }

      if (_expanded) {
        this.show = true;
      }

      this.$nextTick(function () {
        var _this$$refs = _this.$refs,
            content = _this$$refs.content,
            wrapper = _this$$refs.wrapper;

        if (!content || !wrapper) {
          return;
        }

        var contentHeight = content.clientHeight + 'px';
        wrapper.style.height = _expanded ? contentHeight : 0;
      });
    }
  },
  methods: {
    click: function click() {
      this.expanded = !this.expanded;
      this.$emit('click');
    },
    onTransitionEnd: function onTransitionEnd() {
      if (!this.expanded) {
        this.show = false;
      }
    },
    findParent: function findParent(name) {
      var parent = this.$parent;

      while (parent) {
        if (parent.$options.name === name) {
          this.parent = parent;
          break;
        }

        parent = parent.$parent;
      }
    }
  }
};
exports.default = _default;