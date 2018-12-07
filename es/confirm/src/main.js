import layerMixin from '../../layer/layerMixin.js';
export default {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('transition', {
      attrs: {
        "enter-active-class": "animated pulse",
        "leave-active-class": "animated zoomOut"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.visible,
        expression: "visible"
      }],
      staticClass: "weui-mask",
      on: {
        "click": function click($event) {
          $event.stopPropagation();

          if ($event.target !== $event.currentTarget) {
            return null;
          }

          return _vm.close($event);
        }
      }
    }, [_c('div', {
      staticClass: "weui-dialog ac-confirm"
    }, [_c('div', {
      staticClass: "weui-dialog__hd ac-confirm__hd"
    }, [_c('strong', {
      staticClass: "weui-dialog__title"
    }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
      staticClass: "weui-dialog__bd ac-confirm__bd",
      domProps: {
        "innerHTML": _vm._s(_vm.description)
      }
    }), _c('div', {
      staticClass: "weui-dialog__ft ac-confirm__ft"
    }, [!_vm.noCancel ? _c('a', {
      staticClass: "weui-dialog__btn weui-dialog__btn_default",
      attrs: {
        "href": "javascript:;"
      },
      on: {
        "click": _vm.close
      }
    }, [_vm._v(_vm._s(_vm.cancelText))]) : _vm._e(), _c('a', {
      staticClass: "weui-dialog__btn weui-dialog__btn_primary",
      attrs: {
        "href": "javascript:;"
      },
      on: {
        "click": _vm.confirm
      }
    }, [_vm._v(_vm._s(_vm.confirmText))])])])])]);
  },
  name: 'AcConfirm',
  mixins: [layerMixin],
  props: {
    title: {
      type: String,
      default: '弹窗标题'
    },
    description: String,
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    noCancel: Boolean
  },
  methods: {
    on: function on(event, callback) {
      this.$on(event, callback);
      return this;
    },
    confirm: function confirm(evt) {
      this.close();
      this.$emit('confirm', evt, this);
    }
  }
};