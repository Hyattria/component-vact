"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vueAwesomeSwiper = require("vue-awesome-swiper");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
        return _extends({}, this.swiperOption, this.options);
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