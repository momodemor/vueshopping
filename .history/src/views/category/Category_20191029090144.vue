<template>
  <div class="category">
    <nav-bar class="navbar">
      <template v-slot:center>
        <span>商品分类</span>
      </template>
    </nav-bar>
    <scroll class="scroll" :probe-type="3" :click="true" :pull-up-load="true" ref="scroll">
      <left-list v-bind:list="list" @listItemClick="listItemClick" :currentIndex="currentIndex"></left-list>
      <div class="right">
        <top :top="categorydata[currentIndex] ? showTop: []" class="abc"/>
        <tab-control :title="['流行','新款','精选']" @tabClick="tabClick"/>
        <goods-list :goods-list="categorydata[currentIndex] ? showBottom: []"/>
      </div>
    </scroll>
    <!-- <left-list v-bind:list="list" @listItemClick="listItemClick" :currentIndex="currentIndex"></left-list>
    <div class="right">
      <top :top="categorydata[currentIndex] ? showTop: []" class="abc"/>
      <tab-control :title="['流行','新款','精选']" @tabClick="tabClick"/>
      <goods-list :goods-list="categorydata[currentIndex] ? showBottom: []"/>
    </div> -->
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  import leftList from './children/leftList'
  import top from './children/top'

  import {getCategory,getSubcategory,getCategoryDetail} from "network/category"

  export default {
    name: 'Category',
    data() {
      return {
        list: [],
        currentIndex: 0,
        categorydata: [],
        currentType: 'pop'
      }
    },
    components: {
    leftList,
    top,
    TabControl,
    GoodsList,
    NavBar,
    Scroll
    },
    created() {
      // getCategory().then(res => {
      //  console.log(res)
      //   this.list = res.data.category.list
      //   for (let i = 0; i < this.list.length; i++) {
      //     this.categorydata[i] = {
      //       top: [],
      //       bottom: {
      //         new: [],
      //         pop: [],
      //         sell: []
      //       }
      //     }
      //   }
      //   return getSubcategory(this.list[this.currentIndex].maitKey)
      // }).then(res => {
      //       console.log(res);
      //     this.subcategory[this.currentIndex] = res.data.list})
      //    if (this.list) {
          //  getSubcategory(this.list[this.currentIndex].maitKey).then(res => {
          //   // console.log(res);
          // this.subcategory[this.currentIndex] = res.data.list
      // })
      //    }
      this._getCategory()
    },
    mounted() {
      this.$bus.$on('itemImageLoad',() => {
        this.$refs.scroll.refresh()
      })
    },
      // getSubcategory()
    computed: {
      showTop: function() {
        if (this.categorydata[this.currentIndex].top) {
        return this.categorydata[this.currentIndex].top          
        }
      },
      showBottom: function() {
        if (this.categorydata[this.currentIndex].bottom) {
        return this.categorydata[this.currentIndex].bottom[this.currentType]          
        }
      }
    },
    methods: {
      _getCategory() {
         getCategory().then( res=> {
           console.log(res)
           this.list = res.data.category.list
           for (let i = 0; i < this.list.length; i++) {
             this.categorydata[i] = {
               top: [],
               bottom: {
                 new: [],
                 pop: [],
                 sell: []
               }
              }
            }
            this._getSubcategory(0)
          })
          
      },
      _getSubcategory(index) {
        this.currentIndex = index
        let maitKey = this.list[index].maitKey
        getSubcategory(maitKey).then(res => {
          // console.log(res);
          // console.log(this.categorydata[this.currentIndex]);
          this.categorydata[this.currentIndex].top = res.data.list
          this.categorydata = {...this.categorydata}
        })
          this._getCategoryDetail('new')
          this._getCategoryDetail('sell')
          this._getCategoryDetail('pop')
      },
      _getCategoryDetail(type) {
        let miniWallkey = this.list[this.currentIndex].miniWallkey
        getCategoryDetail(miniWallkey, type).then(res => {
          // console.log(res);
          
          this.categorydata[this.currentIndex].bottom[type] = res
          this.categorydata = {...this.categorydata}
        })
      },
      listItemClick(index) {
        // this.currentIndex = index
        // getSubcategory(this.list[index].maitKey).then(res => {
        //   console.log(res);
        // this.subcategory[index] = res.data.list
        this._getSubcategory(index)
      },
      tabClick(index) {
        switch (index) {
          case 0: this.currentType = 'pop'
            break;
          case 1: this.currentType = 'new'
            break;
          case 2: this.currentType = 'sell'
            break;
        }
      }
    },
}

</script>

<style scoped>
.content {
  display: flex;
  width: 100vw;
  position: relative;
}
.abc {
  display: flex;
  flex-wrap: wrap;
  width: 75vw;
  justify-content: flex-start;
}
.right {
  width: 75vw;
}
.navbar {
  background-color: #ff5777;
  color: #fff;
  position: fixed;
}
.scroll {
  position: absolute;
  left: 0;
  top: 44px;
  right: 0;
  bottom: 49px;
  /* overflow: hidden; */
  /* height: calc(100vh - 93px); */
}
</style>
