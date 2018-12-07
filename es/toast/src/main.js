import layerMixin from '../../layer/layerMixin.js';
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
      staticClass: "ac-toast"
    }, [_vm._v("\n    " + _vm._s(_vm.message) + "\n  ")])]);
  },
  name: 'AcToast',
  mixins: [layerMixin],
  mounted: function mounted() {
    var _this = this;

    // 设定的时间后自动关闭
    setTimeout(function () {
      _this.close();
    }, this.duration);
  },
  props: {
    message: {
      type: String,
      default: '你有一条消息'
    },
    duration: {
      type: Number,
      default: 3000
    }
  }
};