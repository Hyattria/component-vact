<template>
  <div
    :class="[
      'ac-input-number',
      size ? 'ac-input-number--' + size : '',
      { 'is-round': round },
      { 'is-disabled': inputNumberDisabled },
      { 'is-without-controls': !controls }
    ]">
    <transition name="rotate">
      <span
        v-show="round ? !(+model === min) : true"
        class="ac-input-number__decrease"
        :class="{ 'is-disabled': minDisabled }"
        v-repeat-click='decrease'>
        <i :class="`ac-icon-${round ? 'minus-circle-fill' : 'move'}`"></i>
      </span>
    </transition>
    <span
      class="ac-input-number__increase"
      @click="increase"
      :class="{ 'is-disabled': maxDisabled }"
      >
      <i :class="`ac-icon-${round ? 'plus-circle-fill' : 'add'}`"></i>
    </span>
    <ac-input
      v-show="round ? !(+model === min) : true"
      v-model="model"
      readonly
      :min="min"
      :max="max"
      :size="size"
      :disabled="inputNumberDisabled"
      />
     <!--小球-->
     <div v-if="ball" class="ball-container">
        <div v-for="(ball, index) in balls" :key=index>
          <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
            <div class="ball" v-show="ball.show">
              <div class="inner inner-hook"></div>
            </div>
          </transition>
        </div>
      </div>
  </div>
</template>

<script>
import AcInput from '../../input'
import repeatClick from '../../../utils/directives/repeat-click'
export default {
  name: 'AcInputNumber',
  data () {
    return {
      items: [
        {
          text: '苹果',
          price: 15
        },
        {
          text: '香蕉',
          price: 15
        }
      ],
      count: 0,
      balls: [
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        }
      ],
      dropBalls: []
    }
  },
  props: {
    value: {},
    step: {
      type: Number,
      default: 1
    },
    disabled: Boolean,
    max: Number,
    min: {
      type: Number,
      default: 0
    },
    controls: {
      type: Boolean,
      default: true
    },
    size: String,
    round: Boolean,
    ball: Boolean
  },
  directives: {
    repeatClick
  },
  components: {
    AcInput
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    inputNumberDisabled () {
      return this.disabled
    },
    minDisabled () {
      return this.model <= this.min
    },
    maxDisabled () {
      return this.model >= this.max
    }
  },
  methods: {
    decrease () {
      if (this.inputNumberDisabled || this.minDisabled) return
      this.model = +this.model - this.step
      this.$emit('move')
    },
    increase (e) {
      if (this.inputNumberDisabled || this.maxDisabled) return
      this.model = +this.model + this.step
      this.additem(e)
      this.$emit('add')
    },
    additem (event) {
      this.drop(event.target)
      this.count++
    },
    drop (el) {
      // 抛物
      for (let i = 0; i < this.balls.length; i++) {
        let ball = this.balls[i]
        if (!ball.show) {
          ball.show = true
          ball.el = el
          this.dropBalls.push(ball)
          return
        }
      }
    },
    beforeDrop (el) {
      /* 购物车小球动画实现 */
      let count = this.balls.length
      while (count--) {
        let ball = this.balls[count]
        if (ball.show) {
          let rect = ball.el.getBoundingClientRect() // 元素相对于视口的位置
          let x = rect.left - 32
          let y = -(window.innerHeight - rect.top - 30) // 获取y
          el.style.display = ''
          el.style.webkitTransform = `translateY(${y}px)` // translateY
          el.style.transform = `translateY(${y}px)`
          let inner = el.getElementsByClassName('inner-hook')[0]
          inner.style.webkitTransform = `translateX(${x}px)`
          inner.style.transform = `translateX(${x}px)`
        }
      }
    },
    dropping (el, done) {
      /* 重置小球数量  样式重置 */
      /* eslint-disable */
      let rf = el.offsetHeight
      el.style.webkitTransform = 'translate3d(0,0,0)'
      el.style.transform = 'translate3d(0,0,0)'
      let inner = el.getElementsByClassName('inner-hook')[0]
      inner.style.webkitTransform = 'translate3d(0,0,0)'
      inner.style.transform = 'translate3d(0,0,0)'
      el.addEventListener('transitionend', done)
    },
    afterDrop (el) {
      /* 初始化小球 */
      let ball = this.dropBalls.shift()
      if (ball) {
        ball.show = false
        el.style.display = 'none'
      }
    }
  }
}
</script>

<style>
.shop-t {
  position: fixed;
  top: 470px;
  left: 300px;
}
.ball {
  position: fixed;
  left: 32px;
  bottom: 22px;
  z-index: 200;
  transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41); /*贝塞尔曲线*/
}
.inner {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: rgb(0, 160, 220);
  transition: all 0.4s linear;
}
.cart {
  position: fixed;
  bottom: 22px;
  left: 32px;
  width: 30px;
  height: 30px;
  background-color: rgb(0, 160, 220);
  color: rgb(255, 255, 255);
}
</style>
