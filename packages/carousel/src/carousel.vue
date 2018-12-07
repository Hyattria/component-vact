<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      activeIndex: 1,
      swiperOption: {
        autoplay: true,
        allowTouchMove: false,
        autoHeight: true,
        speed: 500
      }
    }
  },
  name: 'AcCarousel',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    options: {},
    indicator: Boolean,
    height: String
  },
  computed: {
    vNodes () {
      return this.$slots.default.filter(item => item.tag)
    },
    SwiperOptions () {
      if (JSON.stringify(this.options) === '{}') {
        return Object.assign({}, this.swiperOption, this.options)
      } else {
        return this.options
      }
    },
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.swiper.on('slideChangeTransitionEnd', () => {
      this.activeIndex = this.swiper.activeIndex + 1
    })
  },
  render (h) {
    return (
      <div class='ac-carousel'>
        <swiper options={ this.SwiperOptions } ref='mySwiper'>
          {
            this.vNodes.map(item => {
              return h('swiper-slide', {
                style: {
                  height: this.height
                }
              }, [item])
            })
          }
        </swiper>
        <div class='indicator' v-show={ this.indicator }>
          { this.activeIndex }<span>/{ this.vNodes && this.vNodes.length }</span>
        </div>
      </div>
    )
  }
}
</script>
