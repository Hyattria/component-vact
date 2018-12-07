<template>
  <div
    class="ac-swiper"
    v-if="data && data.length > 0">
    <swiper
      :options="SwiperOptions"
      v-if="swiperData.length">
      <swiper-slide v-for="(item, index) of swiperData"
			  :key="index">
				{{ item }}
			</swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

const TELPREFIX = [
  130, 131, 132, 155, 156, 186, 185, 176, 134,
  135, 136, 137, 138, 139, 150, 151, 152, 157, 158, 159, 182,
  183, 184, 188, 187, 147, 178, 133, 153, 180, 181, 189, 177
]

export default {
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        loop: true,
        autoplay: true,
        allowTouchMove: false,
        autoHeight: true,
        speed: 500
      },
      swiperData: []
    }
  },
  name: 'AcSwiper',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    options: {},
    data: {
      type: Array,
      default: []
    },
    property: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    SwiperOptions () {
      return Object.assign({}, this.swiperOption, this.options)
    }
  },
  watch: {
    data () {
      this.$nextTick(() => {
        this.initUsers()
      })
    }
  },
  methods: {
    initUsers () {
      const REWARDS = this.data.map(item => {
        return this.property ? item[this.property] : item
      })
      const seeds = []
      for (let i = 0; i < 10; i++) {
        seeds.push(parseInt(Math.random() * 1000) + '')
      }
      this.swiperData = seeds.map(item => {
        if (item.length !== 4) {
          item = `0${item}`
        }
        const _pre = TELPREFIX[parseInt(Math.random() * 33)]
        return `${_pre}-xxxx-${item} 领取了${REWARDS[this.getRandomInt(0, REWARDS.length)]}${this.name || ''}`
      })
    },
    getRandomInt (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min
    }
  }
}
</script>
