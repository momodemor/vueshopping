<template>
  <div v-if="detailImages.length !== 0">
    <div class="desc">
      <p>{{detailDesc}}</p>
    </div>
    <p>穿着效果</p>
    <div v-for="(item,index) in detailImages" :key="index">
      <img :src="item" alt="" @load="imageLoad">
    </div>
  </div>
</template>

<script>
import {debounce} from 'common/tool'
export default {
  name: 'DetailInfo',
  data() {
    return {
      // throwImageLoad: null
    }
  },
  props: {
    detailImages: {
      type: Array,
      default() {
        return []
      }
    },
    detailDesc: ''
  },
  methods: {
    imageLoad() {
      // console.log(111111);
      // (debounce(this.$emit('imageLoad'),500))()
      // this.throwImageLoad = debounce(this.$emit('imageLoad'),500)
      // this.throwImageLoad()
      this.$emit('imageLoad')
    }
  },
  // mounted() {
  //     this.throwImageLoad()    
  // },
}
</script>

<style scoped>
img {
  width: 100%;
}
.desc {
  padding: 3px 5px;
}
 .desc p {
   padding: 5px 3px;

   /* text-indent: 2em; */
 }
</style>