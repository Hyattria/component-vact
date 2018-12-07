import AcTabBarItem from '../tabbar/src/item';

AcTabBarItem.install = function (Vue) {
  Vue.component(AcTabBarItem.name, AcTabBarItem);
};

export default AcTabBarItem;