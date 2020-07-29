<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar" @DNBClick="scrollToY" ref="dnb"></detail-nav-bar>
    <scroll class="detail-scroll" ref="scroll"
              @bscroll="scrollmsg" :probeType="3" :click="true">
      <detail-swiper :topImages="topImages" class="detail-swiper"></detail-swiper>
      <goods-info :goods="goods" ref="goods"></goods-info>
      <shop-info :shopInfo="shopInfo"></shop-info>
      <detail-info :detailImages="detailImages" :detailDesc="detailDesc" @imageLoad="imageLoad"></detail-info>
      <goods-params :GoodsParam="GoodsParam" ref="params"></goods-params>
      <detail-rate :Rate="Rate" ref="rate"></detail-rate>
      <recommend :goods-list="recommend" ref="recommend"></recommend>
    </scroll>
    <detail-tab-bar @addCart="addCart"></detail-tab-bar>
  </div>
</template>

<script>
import DetailNavBar from './children/DetailNavBar'
import DetailSwiper from './children/DetailSwiper'
import GoodsInfo from './children/GoodsInfo'
import ShopInfo from './children/ShopInfo'
import DetailInfo from './children/DetailInfo'
import GoodsParams from './children/GoodsParams'
import DetailRate from './children/DetailRate'
import Recommend from './children/Recommend'
import DetailTabBar from './children/DetailTabBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import {detail,recommend,Goods,Shop,GoodsParam} from 'network/detail'
import {debounce} from 'common/tool'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      goods: {},
      topImages: [],
      shopInfo:{},
      detailImages: [],
      detailDesc: '',
      GoodsParam: {},
      Rate: {},
      scrollY: 0,
      titleY: [],
      recommend: [],
      getTitleY: null
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    GoodsInfo,
    ShopInfo,
    Scroll,
    DetailInfo,
    GoodsParams,
    DetailRate,
    GoodsList,
    Recommend,
    DetailTabBar
  },
  created() {
    this.iid = this.$route.params.iid
    // console.log(this.$route.params.iid);
    detail(this.iid).then(res => {
      console.log(res);
      const data = res.result
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      // console.log(this.goods);
      this.topImages = res.result.itemInfo.topImages
      this.shopInfo = new Shop(data.shopInfo)
      this.detailImages = res.result.detailInfo.detailImage[0].list
      this.detailDesc = res.result.detailInfo.desc
      this.GoodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      this.Rate = res.result.rate.list[0]
    }),
    recommend().then(res => {
      // console.log(res);
      this.recommend = res.data.list
    })
    this.getTitleY = debounce(() => {
      this.titleY = []
      this.titleY.push(0)
        this.titleY.push(this.$refs.params.$el.offsetTop)
        this.titleY.push(this.$refs.rate.$el.offsetTop)
        this.titleY.push(this.$refs.recommend.$el.offsetTop)
        console.log(+66666);
        console.log(this.titleY);

    //   //   this.titleY.push(this.$refs.params.$el.offsetTOP)
    //   //   this.titleY.push(this.$refs.rate.$el.offsetTOP)
    //   //   this.titleY.push(this.$refs.recommend.$el.offsetTOP)
    //   // console.log(+66666);
    //   // console.log(this.titleY);

      
      
    //   // console.log(this.titleY);
      
    },200)

  },
  // updated() {
  //   this.titleY[0] = -this.$refs.goods.$el.offsetTOP
  //   this.titleY[1] = -this.$refs.params.$el.offsetTOP
  //   this.titleY[2] = -this.$refs.rate.$el.offsetTOP
  // },
  methods: {
    scrollmsg(position) {
      // console.log(position);
      this.scrollY = -position.y
      if (this.scrollY>=this.titleY[0] && this.scrollY<this.titleY[1]) {
        this.$refs.dnb.currentIndex = 0
      }else if (this.scrollY>=this.titleY[1] && this.scrollY<this.titleY[2]) {
        this.$refs.dnb.currentIndex = 1
      }else if (this.scrollY>=this.titleY[2] && this.scrollY<this.titleY[3]) {
        this.$refs.dnb.currentIndex = 2
      }else if (this.scrollY>=this.titleY[3]) {
        this.$refs.dnb.currentIndex = 3
      }
      // console.log(this.scrollY);
    },
    // positionY(index) {
    //   switch (index) {
    //     case 0:
    //     this.$refs.scroll.scrollTo(0,this.titleY[0])
    //     // console.log(-this.$refs.goods.$el.offsetTOP); 
    //     console.log(item);
    //       break;
    //     case 1:
    //     this.$refs.scroll.scrollTo(0,this.titleY[1])
    //     // console.log(-this.$refs.params.$el.offsetTOP);
    //       break;
    //     case 2:
    //     this.$refs.scroll.scrollTo(0,this.titleY[2])
    //       break;
    //     // case '推荐':this.scrollY = -this.$refs.params.$el.offsetTOP
    //     //   break;
    //     default:
    //       break;
    //   }
    // },
    imageLoad() {
      // console.log(11111111);
      // debounce(console.log(11111111))
      this.$refs.scroll.refresh()
      this.getTitleY()
      // console.log(this.titleY);
      // console.log(1211212);
      
    },
    scrollToY(index) {
      this.$refs.scroll.scrollTo(0,-this.titleY[index],100)
      
    },
    addCart() {
      const product = {}
      product.realPrice = this.goods.realPrice
      product.title = this.goods.title
      product.image = this.detailImages[0]
      product.desc = this.detailDesc
      product.iid = this.iid
      this.$store.dispatch('addCart',product).then(res => {
        this.$toast.show('添加成功')
        console.log(res);
      })
      // console.log(this.$store.state.cartList); 
        // this.$store.commit('addCart',product)
        // this.$toast.show('添加成功')
        // console.log(res);
    }
  }
}
</script>

<style scoped>
/* .detail {
  position: relative;
} */
.detail-nav-bar {
  position: relative;
  background-color: #fff;
  z-index: 2;
}
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
.center {
  display: flex;
}
.detail-scroll {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
  /* height: calc(100% - 44px - 49px); */
  /* z-index: 399999; */
  /* padding-bottom: 449px;  */
}
</style>