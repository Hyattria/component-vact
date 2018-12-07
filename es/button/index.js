import AcButton from './src/button';

AcButton.install = function (Vue) {
  Vue.component(AcButton.name, AcButton);
};

export default AcButton;