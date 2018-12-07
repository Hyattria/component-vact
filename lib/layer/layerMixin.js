"use strict";

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("/Users/0002132/Desktop/freshes/component-vact/node_modules/@babel/runtime/regenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
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
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
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
    timeout: function timeout(ms) {
      if (ms === void 0) {
        ms = 3000;
      }

      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }
  }
};
exports.default = _default;