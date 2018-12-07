function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { swiper, swiperSlide } from 'vue-awesome-swiper';
var TELPREFIX = [130, 131, 132, 155, 156, 186, 185, 176, 134, 135, 136, 137, 138, 139, 150, 151, 152, 157, 158, 159, 182, 183, 184, 188, 187, 147, 178, 133, 153, 180, 181, 189, 177];
export default {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.data && _vm.data.length > 0 ? _c('div', {
      staticClass: "ac-swiper"
    }, [_vm.swiperData.length ? _c('swiper', {
      attrs: {
        "options": _vm.SwiperOptions
      }
    }, _vm._l(_vm.swiperData, function (item, index) {
      return _c('swiper-slide', {
        key: index
      }, [_vm._v("\n\t\t\t\t" + _vm._s(item) + "\n\t\t\t")]);
    })) : _vm._e()], 1) : _vm._e();
  },
  data: function data() {
    return {
      swiperOption: {
        direction: 'vertical',
        loop: true,
        autoplay: true,
        allowTouchMove: false,
        autoHeight: true,
        speed: 500
      },
      swiperData: []
    };
  },
  name: 'AcSwiper',
  components: {
    swiper: swiper,
    swiperSlide: swiperSlide
  },
  props: {
    options: {},
    data: {
      type: Array,
      default: []
    },
    property: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    SwiperOptions: function SwiperOptions() {
      return _extends({}, this.swiperOption, this.options);
    }
  },
  watch: {
    data: function data() {
      var _this = this;

      this.$nextTick(function () {
        _this.initUsers();
      });
    }
  },
  methods: {
    initUsers: function initUsers() {
      var _this2 = this;

      var REWARDS = this.data.map(function (item) {
        return _this2.property ? item[_this2.property] : item;
      });
      var seeds = [];

      for (var i = 0; i < 10; i++) {
        seeds.push(parseInt(Math.random() * 1000) + '');
      }

      this.swiperData = seeds.map(function (item) {
        if (item.length !== 4) {
          item = "0" + item;
        }

        var _pre = TELPREFIX[parseInt(Math.random() * 33)];
        return _pre + "-xxxx-" + item + " \u9886\u53D6\u4E86" + REWARDS[_this2.getRandomInt(0, REWARDS.length)] + (_this2.name || '');
      });
    },
    getRandomInt: function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }
};