"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "ac-progress"
    }, [_c('span', {
      staticClass: "ac-progress__portion",
      style: _vm.portionStyle
    }, [_c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.showPivot,
        expression: "showPivot"
      }],
      ref: "pivot",
      staticClass: "ac-progress__pivot",
      style: _vm.pivotStyle
    }, [_vm._v(_vm._s(_vm.text))])])]);
  },
  name: 'AcProgress',
  props: {
    inactive: Boolean,
    pivotText: {
      type: String,
      default: ''
    },
    pivotColor: String,
    value: '',
    total: '',
    showPivot: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#38f'
    },
    textColor: {
      type: String,
      default: '#fff'
    },
    percentage: {
      type: Number,
      // required: true,
      validator: function validator(value) {
        return value >= 0 && value <= 100;
      }
    }
  },
  data: function data() {
    return {
      pivotWidth: 0,
      progressWidth: 0
    };
  },
  computed: {
    text: function text() {
      return this.pivotText === '' ? '' : this.percentage + '%';
    },
    currentColor: function currentColor() {
      return this.inactive ? '#cacaca' : this.color;
    },
    pivotStyle: function pivotStyle() {
      return {
        color: this.textColor,
        background: this.pivotColor || this.currentColor
      };
    },
    portionStyle: function portionStyle() {
      return {
        width: (this.progressWidth - this.pivotWidth) * this.percentage / 100 + 'px',
        background: this.currentColor
      };
    }
  },
  mounted: function mounted() {
    this.getWidth();
  },
  methods: {
    getWidth: function getWidth() {
      this.progressWidth = this.$el.offsetWidth;
      this.pivotWidth = this.$refs.pivot ? this.$refs.pivot.offsetWidth : 0;
    }
  }
};
exports.default = _default;