import Cell from './src/main';

Cell.install = function (Vue) {
  Vue.component(Cell.name, Cell);
};

export default Cell;