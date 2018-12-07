import { CITY, TOKEN } from '../../../utils/token.js';
export default {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "ac-cart",
      style: {
        backgroundColor: _vm.color
      },
      on: {
        "click": _vm.toCart
      }
    }, [_c('div', {
      staticClass: "ac-cart__img"
    }), _vm.count ? _c('div', {
      staticClass: "ac-cart__count"
    }, [_vm._v(_vm._s(_vm.cartCount + _vm.model || 0))]) : _vm._e(), _vm._t("default")], 2);
  },
  name: 'AcCart',
  data: function data() {
    return {
      test: process.env.NODE_ENV !== 'production',
      cartCount: 0,
      city: CITY.get(),
      token: TOKEN.get()
    };
  },
  props: {
    value: {},
    color: {
      type: String,
      default: '#e6a23c'
    },
    count: {
      type: Number,
      default: 0
    }
  },
  computed: {
    model: {
      get: function get() {
        return this.value || 0;
      },
      set: function set(val) {
        this.$emit('input', val);
      }
    }
  },
  methods: {
    toCart: function toCart() {
      this.$emit('tocart');
    }
  }
};