"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _layer = _interopRequireDefault(require("./layer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  mounted: function mounted() {
    this.layer = this.update();
  },
  watch: {
    visible: function visible() {
      this.layer.visible = this.visible;
    }
  },
  methods: {
    update: function update() {
      var _this = this;

      var layer = new (_vue.default.extend(_layer.default))({
        el: document.createElement('div')
      }); // 监听

      layer.$on('update:visible', function (visible) {
        if (!visible) _this.$emit('update:visible', false);
      });

      if (layer.$el.parentNode) {
        layer.visible = false;
      }

      this.$parent.$el.appendChild(layer.$el);
      return layer;
    },
    show: function show(vm) {
      this.visible = true;
      return this;
    },
    destroy: function destroy(vm) {
      this.visible = false;
    }
  }
};
exports.default = _default;