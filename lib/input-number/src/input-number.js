"use strict";

exports.__esModule = true;
exports.default = void 0;

var _input = _interopRequireDefault(require("../../input"));

var _repeatClick = _interopRequireDefault(require("../../../utils/directives/repeat-click"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: ['ac-input-number', _vm.size ? 'ac-input-number--' + _vm.size : '', {
        'is-round': _vm.round
      }, {
        'is-disabled': _vm.inputNumberDisabled
      }, {
        'is-without-controls': !_vm.controls
      }]
    }, [_c('transition', {
      attrs: {
        "name": "rotate"
      }
    }, [_c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.round ? !(+_vm.model === _vm.min) : true,
        expression: "round ? !(+model === min) : true"
      }, {
        name: "repeat-click",
        rawName: "v-repeat-click",
        value: _vm.decrease,
        expression: "decrease"
      }],
      staticClass: "ac-input-number__decrease",
      class: {
        'is-disabled': _vm.minDisabled
      }
    }, [_c('i', {
      class: "ac-icon-" + (_vm.round ? 'minus-circle-fill' : 'move')
    })])]), _c('span', {
      staticClass: "ac-input-number__increase",
      class: {
        'is-disabled': _vm.maxDisabled
      },
      on: {
        "click": _vm.increase
      }
    }, [_c('i', {
      class: "ac-icon-" + (_vm.round ? 'plus-circle-fill' : 'add')
    })]), _c('ac-input', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.round ? !(+_vm.model === _vm.min) : true,
        expression: "round ? !(+model === min) : true"
      }],
      attrs: {
        "readonly": "",
        "min": _vm.min,
        "max": _vm.max,
        "size": _vm.size,
        "disabled": _vm.inputNumberDisabled
      },
      model: {
        value: _vm.model,
        callback: function callback($$v) {
          _vm.model = $$v;
        },
        expression: "model"
      }
    }), _vm.ball ? _c('div', {
      staticClass: "ball-container"
    }, _vm._l(_vm.balls, function (ball, index) {
      return _c('div', {
        key: index
      }, [_c('transition', {
        attrs: {
          "name": "drop"
        },
        on: {
          "before-enter": _vm.beforeDrop,
          "enter": _vm.dropping,
          "after-enter": _vm.afterDrop
        }
      }, [_c('div', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: ball.show,
          expression: "ball.show"
        }],
        staticClass: "ball"
      }, [_c('div', {
        staticClass: "inner inner-hook"
      })])])], 1);
    })) : _vm._e()], 1);
  },
  name: 'AcInputNumber',
  data: function data() {
    return {
      items: [{
        text: '苹果',
        price: 15
      }, {
        text: '香蕉',
        price: 15
      }],
      count: 0,
      balls: [{
        show: false
      }, {
        show: false
      }, {
        show: false
      }],
      dropBalls: []
    };
  },
  props: {
    value: {},
    step: {
      type: Number,
      default: 1
    },
    disabled: Boolean,
    max: Number,
    min: {
      type: Number,
      default: 0
    },
    controls: {
      type: Boolean,
      default: true
    },
    size: String,
    round: Boolean,
    ball: Boolean
  },
  directives: {
    repeatClick: _repeatClick.default
  },
  components: {
    AcInput: _input.default
  },
  computed: {
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        this.$emit('input', val);
      }
    },
    inputNumberDisabled: function inputNumberDisabled() {
      return this.disabled;
    },
    minDisabled: function minDisabled() {
      return this.model <= this.min;
    },
    maxDisabled: function maxDisabled() {
      return this.model >= this.max;
    }
  },
  methods: {
    decrease: function decrease() {
      if (this.inputNumberDisabled || this.minDisabled) return;
      this.model = +this.model - this.step;
      this.$emit('move');
    },
    increase: function increase(e) {
      if (this.inputNumberDisabled || this.maxDisabled) return;
      this.model = +this.model + this.step;
      this.additem(e);
      this.$emit('add');
    },
    additem: function additem(event) {
      this.drop(event.target);
      this.count++;
    },
    drop: function drop(el) {
      // 抛物
      for (var i = 0; i < this.balls.length; i++) {
        var ball = this.balls[i];

        if (!ball.show) {
          ball.show = true;
          ball.el = el;
          this.dropBalls.push(ball);
          return;
        }
      }
    },
    beforeDrop: function beforeDrop(el) {
      /* 购物车小球动画实现 */
      var count = this.balls.length;

      while (count--) {
        var ball = this.balls[count];

        if (ball.show) {
          var rect = ball.el.getBoundingClientRect(); // 元素相对于视口的位置

          var x = rect.left - 32;
          var y = -(window.innerHeight - rect.top - 30); // 获取y

          el.style.display = '';
          el.style.webkitTransform = "translateY(" + y + "px)"; // translateY

          el.style.transform = "translateY(" + y + "px)";
          var inner = el.getElementsByClassName('inner-hook')[0];
          inner.style.webkitTransform = "translateX(" + x + "px)";
          inner.style.transform = "translateX(" + x + "px)";
        }
      }
    },
    dropping: function dropping(el, done) {
      /* 重置小球数量  样式重置 */

      /* eslint-disable */
      var rf = el.offsetHeight;
      el.style.webkitTransform = 'translate3d(0,0,0)';
      el.style.transform = 'translate3d(0,0,0)';
      var inner = el.getElementsByClassName('inner-hook')[0];
      inner.style.webkitTransform = 'translate3d(0,0,0)';
      inner.style.transform = 'translate3d(0,0,0)';
      el.addEventListener('transitionend', done);
    },
    afterDrop: function afterDrop(el) {
      /* 初始化小球 */
      var ball = this.dropBalls.shift();

      if (ball) {
        ball.show = false;
        el.style.display = 'none';
      }
    }
  }
};
exports.default = _default;