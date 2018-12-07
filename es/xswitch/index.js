import XSwitch from './src/main';

XSwitch.install = function (Vue) {
  Vue.component(XSwitch.name, XSwitch);
};

export default XSwitch;