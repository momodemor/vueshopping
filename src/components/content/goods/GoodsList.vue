<template>
  <div class="goods-list" v-if="goodsList.length !== 0">
    <goods-list-item :goods-item="item" v-for="(item,index) in goodsList" :key="index"></goods-list-item>    
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  props: {
    goodsList:{
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsListItem,
  }
}
</script>

<style scoped>
.goods-list {
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}
</style>