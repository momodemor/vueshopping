<template>
  <div class="recommend">
    <recommend-item v-for="(item,index) in goodsList" :key="index" :goods-item="item"></recommend-item>
  </div>
</template>

<script>
import RecommendItem from './RecommendItem'
export default {
  name: 'Recommend',
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    } 
  },
  components: {
    RecommendItem
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>