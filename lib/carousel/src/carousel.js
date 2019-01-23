"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vueAwesomeSwiper = require("vue-awesome-swiper");

var _default = {
  data: function data() {
    return {
      activeIndex: 1,
      swiperOption: {
        autoplay: true,
        allowTouchMove: false,
        autoHeight: true,
        speed: 500
      }
    };
  },
  name: 'AcCarousel',
  components: {
    swiper: _vueAwesomeSwiper.swiper,
    swiperSlide: _vueAwesomeSwiper.swiperSlide
  },
  props: {
    options: {},
    indicator: Boolean,
    height: String
  },
  computed: {
    vNodes: function vNodes() {
      return this.$slots.default.filter(function (item) {
        return item.tag;
      });
    },
    SwiperOptions: function SwiperOptions() {
      if (JSON.stringify(this.options) === '{}') {
        return (0, _extends2.default)({}, this.swiperOption, this.options);
      } else {
        return this.options;
      }
    },
    swiper: function swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.swiper.on('slideChangeTransitionEnd', function () {
      _this.activeIndex = _this.swiper.activeIndex + 1;
    });
  },
  render: function render(h) {
    var _this2 = this;

    return h("div", {
      "class": 'ac-carousel'
    }, [h("swiper", {
      attrs: {
        options: this.SwiperOptions
      },
      ref: 'mySwiper'
    }, [this.vNodes.map(function (item) {
      return h('swiper-slide', {
        style: {
          height: _this2.height
        }
      }, [item]);
    })]), h("div", {
      "class": 'indicator',
      directives: [{
        name: "show",
        value: this.indicator
      }]
    }, [this.activeIndex, h("span", ["/", this.vNodes && this.vNodes.length])])]);
  }
};
exports.default = _default;