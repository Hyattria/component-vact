import AcTabBar from './src/main';

AcTabBar.install = function (Vue) {
  Vue.component(AcTabBar.name, AcTabBar);
};

export default AcTabBar;