import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
export default {
  props: {
    visible: Boolean
  },
  created: function created() {
    this.listen();
  },
  methods: {
    /**
     * 触发显示的事件请求
     * @method show
     * @return {undefined}
     */
    show: function show() {
      this.$emit('update:visible', true);
      return this;
    },

    /**
     * 触发隐藏的事件请求
     * @method hide
     * @return {undefined}
     */
    close: function close() {
      this.$emit('update:visible', false);
    },
    listen: function listen() {
      var _this = this;

      this.$on('update:visible', function (visible) {
        visible ? _this.open() : _this.destroy();
      });
    },
    open: function open() {
      this.visible = true;
    },
    destroy: function () {
      var _destroy = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.visible = false;
                _context.next = 3;
                return this.timeout(500);

              case 3:
                this.$destroy();
                this.removeWrapper();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function destroy() {
        return _destroy.apply(this, arguments);
      };
    }(),
    removeWrapper: function removeWrapper() {
      if (this.$el) {
        document.body.removeChild(this.$el);
      }

      return this;
    },
    timeout: function timeout() {
      var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }
  }
};