import layerMixin from '../../layer/layerMixin.js';
var typeMap = {
  success: {
    type: 'success',
    title: '操作成功'
  },
  info: {
    type: 'info',
    title: '提示'
  },
  warning: {
    type: 'warning',
    title: '注意'
  },
  error: {
    type: 'error',
    title: '发生错误'
  }
};
export default {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('transition', {
      attrs: {
        "enter-active-class": "animated bounceIn",
        "leave-active-class": "animated bounceOut"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.visible,
        expression: "visible"
      }],
      class: ['ac-message', _vm.type ? "ac-message--" + _vm.type : '', _vm.autoClose ? 'is-closable' : '']
    }, [_c('div', {
      staticClass: "ac-message__head"
    }, [_c('i', {
      class: _vm.typeClass
    }), _c('span', {
      staticStyle: {
        "font-size": ".94rem"
      }
    }, [_vm._v(_vm._s(_vm.typeInfo))])]), _c('p', {
      staticClass: "ac-message__content"
    }, [_vm._v(_vm._s(_vm.message))]), !_vm.autoClose ? _c('i', {
      staticClass: "ac-message__closeBtn ac-icon-close",
      on: {
        "click": _vm.close
      }
    }) : _vm._e()])]);
  },
  name: 'AcMessage',
  mixins: [layerMixin],
  props: {
    message: {
      type: String,
      default: '你有一条消息'
    },
    duration: {
      type: Number,
      default: 3000
    },
    type: {
      type: String,
      default: 'info'
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    typeClass: function typeClass() {
      return this.type && "ac-message__icon ac-icon-" + typeMap[this.type].type;
    },
    typeInfo: function typeInfo() {
      return this.type && typeMap[this.type].title;
    }
  },
  mounted: function mounted() {
    var _this = this;

    // 设定的时间后自动关闭
    if (this.autoClose) {
      setTimeout(function () {
        _this.close();
      }, this.duration);
    }
  }
};