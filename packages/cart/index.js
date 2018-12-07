import AcCart from './src/cart'

AcCart.install = function (Vue) {
  Vue.component(AcCart.name, AcCart)
}
export default AcCart
