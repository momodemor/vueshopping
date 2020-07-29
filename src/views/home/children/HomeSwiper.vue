<template>
  <swiper>
    <swiper-item v-for="item in banner" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperImageLoad">
          </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'

export default {
  name: 'HomeSwiper',
  data() {
    return {
      isSwiperImageLoad: true
    }
  },
  components: {
    Swiper, 
    SwiperItem
  },
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  // mounted() {
  //   if (this.isSwiperImageLoad) {
  //     this.$emit('swiperImageLoad')
  //     this.isSwiperImageLoad = false
  //   }
  // },
  methods: {
    swiperImageLoad() {
      if (this.isSwiperImageLoad) {
        this.$emit('swiperImageLoad')
        this.isSwiperImageLoad = false
        // console.log('sdsds');
        
      }
    }
  }
}
</script>

<style scoped>

</style>