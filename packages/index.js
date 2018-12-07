import Toast from './toast'
import Loading from './loading'
import Message from './message'
import Confirm from './confirm'

import AcIcon from './icon/index'
import AcButtonGroup from './button-group/index'
import AcButton from './button/index'
import AcInput from './input/index'
import AcContainer from './container'
import AcHeader from './header'
import AcMain from './main'
import AcFooter from './footer'
import AcSwiper from './swiper'
import AcCarousel from './carousel'
import AcCart from './cart'
import AcTabbar from './tabbar'
import AcTabbarItem from './tabbar-item'
import AcCircle from './circle'
import AcModal from './modal'
import AcInputNumber from './input-number'
import AcPopup from './popup'
import AcGroup from './group'
import AcCell from './cell'
import AcProgress from './progress'
import AcCollaspe from './collapse'
import AcCollaspeItem from './collapse-item'

import AcXcheckbox from './xcheckbox'
import AcXswitch from './xswitch'
import { Card, CardItem, CardPrefix, CardBody } from './card'
import { Radio, RadioGroup, RadioButton } from './radio'

const components = [
  AcIcon,
  AcButton,
  AcButtonGroup,
  AcInput,
  AcSwiper,
  AcCarousel,
  AcCart,
  AcContainer,
  AcHeader,
  AcMain,
  AcFooter,
  AcTabbar,
  AcTabbarItem,
  AcCircle,
  AcModal,
  AcInputNumber,
  AcCell,
  AcPopup,
  AcGroup,
  AcProgress,
  AcXcheckbox,
  AcXswitch,
  Card,
  CardItem,
  CardPrefix,
  CardBody,
  AcCollaspe,
  AcCollaspeItem,
  Radio,
  RadioGroup,
  RadioButton
]

/**
 * 添加 install 方法
 * @param {*} Vue
 */
const install = function (Vue) {
  components.map(component => Vue.component(component.name, component))

  Vue.use(Loading.directive)
  Vue.prototype.$toast = Toast.create
  Vue.prototype.$loading = Loading.create
  Vue.prototype.$message = Message.create
  Vue.prototype.$confirm = Confirm.create
}

export default { install }
export {
  install,
  AcIcon,
  AcButton,
  AcButtonGroup,
  AcInput,
  AcSwiper,
  AcCarousel,
  AcCart,
  AcContainer,
  AcHeader,
  AcMain,
  AcFooter,
  AcTabbar,
  AcTabbarItem,
  AcCircle,
  AcModal,
  AcInputNumber,
  AcGroup,
  AcPopup,
  AcCell,
  AcProgress,
  AcXcheckbox,
  AcXswitch,
  AcCollaspe,
  AcCollaspeItem,
  Card,
  CardItem,
  CardPrefix,
  CardBody,
  Radio,
  RadioGroup,
  RadioButton
}
