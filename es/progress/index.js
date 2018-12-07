import AcProgress from './src/main';

AcProgress.install = function (Vue) {
  Vue.component(AcProgress.name, AcProgress);
};

export default AcProgress;