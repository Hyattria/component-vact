export default {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('button', {
      staticClass: "ac-button",
      class: [_vm.type ? 'ac-button--' + _vm.type : '', _vm.size ? 'ac-button--' + _vm.size : '', {
        'is-plain': _vm.plain,
        'is-disabled': _vm.disabled,
        'is-loading': _vm.loading,
        'is-round': _vm.round,
        'is-circle': _vm.circle
      }],
      style: _vm.type === 'default' && _vm.color && _vm.colorObj,
      attrs: {
        "disabled": _vm.disabled
      },
      on: {
        "click": _vm.handleClick
      }
    }, [_vm.loading ? _c('i', {
      staticClass: "ac-icon-loading"
    }) : _vm._e(), _vm.icon !== '' ? _c('i', {
      class: _vm.icon
    }) : _vm._e(), _vm.$slots.default ? _c('span', [_vm._t("default")], 2) : _vm._e()]);
  },
  name: 'AcButton',
  data: function data() {
    return {
      loading: false,
      colorObj: {
        color: '#fff',
        backgroundColor: this.color,
        borderColor: this.color
      }
    };
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      defautl: undefined
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean
  },
  methods: {
    handleClick: function handleClick(evt) {
      this.$emit('click', evt, this);
    }
  }
};