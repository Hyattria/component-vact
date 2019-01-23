import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
export default {
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
      staticClass: "weui-mask",
      style: _vm.style,
      on: {
        "touchmove": function touchmove($event) {
          $event.preventDefault();
          $event.stopPropagation();
        },
        "click": function click($event) {
          $event.preventDefault();
          $event.stopPropagation();
          return _vm.onHide($event);
        }
      }
    }, [_vm._t("default")], 2)]);
  },
  name: 'layer',
  props: {
    visible: Boolean,
    zIndex: Number,
    className: String,
    customStyle: Object
  },
  computed: {
    style: function style() {
      return _objectSpread({
        zIndex: this.zIndex
      }, this.customStyle);
    }
  },
  methods: {
    onHide: function onHide() {
      this.$emit('update:visible', false);
    }
  }
};