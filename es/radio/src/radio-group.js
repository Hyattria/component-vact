export default {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "ac-radio-group"
    }, [_vm._t("default")], 2);
  },
  name: 'AcRadioGroup',
  componentName: 'AcRadioGroup',
  props: {
    value: {},
    disabled: Boolean
  },
  created: function created() {
    var _this = this;

    this.$on('handleChange', function (value) {
      _this.$emit('change', value);
    });
  }
};