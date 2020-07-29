<template>
  <div id="home">
      <nav-bar>
          <template v-slot:center><div class="home-navbar">购物街</div></template>
      </nav-bar>
      <tab-control :title="['流行','新款','精选']" 
                   @tabClick="changeTitle" 
                   v-show="isTabControl" 
                   ref="tabControl1" 
                   class="fixed">
      </tab-control>
      <scroll class="scroll" 
              :click='isClick' 
              ref="scroll" 
              :probe-type="3" 
              @bscroll="scrollmsg" 
              :pull-up-load="true" 
              @pullingUp="loadMore">
        <home-swiper :banner="banner" @swiperImageLoad='swiperImageLoad'></home-swiper>
        <recommend-view :recommend="recommend"></recommend-view>
        <feature-view></feature-view>
        <tab-control :title="['流行','新款','精选']" @tabClick="changeTitle" ref="tabControl2"></tab-control>
        <goods-list :goods-list="goods[currentType].list"></goods-list>
      </scroll>
      <back-top @click.native="backTopClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop'


import HomeSwiper from './children/HomeSwiper'
import RecommendView from './children/RecommendView'
import FeatureView from './children/FeatureView'

import {getHomeMultiData,getHomeGoods} from 'network/home'

export default {
  name: 'Home',
  data() {
    return {
      // result: null,
      tabHeight: 0,
      isTabControl: false,
      positionY: 0,
      isClick: true,
      currentType: 'pop',
      banner: [],
      recommend: [],
      goods: {
        pop: {page: 0,list: []},
        new: {page: 0,list: []},
        sell: {page: 0,list: []}
      }
    }
  },
  components: {
    BackTop,
    Scroll,
    GoodsList,
    TabControl,
    FeatureView,
    NavBar,
    RecommendView,
    HomeSwiper,
    RecommendView
  },
  created() {
    this.getHomeMultiData()
    this.getHomeGoods('pop')
    this.getHomeGoods('sell')
    this.getHomeGoods('new')
    // --------------------------------------------
    
  },
  mounted() {
    this.$bus.$on('itemImageLoad',() =>{
      // console.log('ghgfjfg');
      if (this.$refs.scroll) {
      this.$refs.scroll.scroll.refresh()        
      }
    })
  },
  activated() {
    this.$refs.scroll.scroll.scrollTo(0,-this.positionY,0)
    this.$refs.scroll.scroll.refresh()
  },
  deactivated() {
    
  },
  methods: {
    // shijianxiangguanfangfa
    changeTitle(index) {
      if (index === 0) {
        this.currentType = 'pop'
      }else if (index === 1) {
        this.currentType = 'new'
      }else if (index === 2) {
        this.currentType = 'sell'
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },

    backTopClick() {
      this.$refs.scroll.scrollTo(0,0,500)
      // console.log('afsdfasf');
    },

    scrollmsg(position) {
      this.positionY = -position.y
      if (this.tabHeight < this.positionY) {
        this.isTabControl = true
      } else {
        this.isTabControl = false
      }
      // console.log(this.positionY);

    },

    loadMore() {
      this.getHomeGoods(this.currentType)
      console.log('上拉加载更多');
      
      this.$refs.scroll.scroll.finishPullUp()
    },

    swiperImageLoad() {
      // console.log(this.$refs.tabControl2.$el.offsetTop);
      this.tabHeight = this.$refs.tabControl2.$el.offsetTop
    },
    // 网络请求相关方法
    getHomeMultiData() {
      getHomeMultiData().then(res => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(page,type).then(res => {
        this.goods[type].list.push(...res.data.list) 
        this.goods[type].page = page
        console.log(this.goods)
      })
    }
  },
  computed: {
    isShow() {
      return this.positionY > 1000
    }
  },
}
</script>
<style scoped>
#home {
  /* padding-top: 44px; */
  width: 100%;
}
.navbar {
  background-color: rgb(255, 178, 178);
}
.scroll {
  /* height: 300px;
  overflow: hidden; */
  position: absolute;
  left: 0;
  top: 44px;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}

.fixed {
  position: relative;
  /* margin-top: 44px; */
  left: 0;
  right: 0;
  z-index: 10000;
}
.home-navbar {
  color: white;
  /* text-align: center; */
  margin: 0 auto
}
</style>