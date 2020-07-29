<template>
 <div class="recommend-view">
   <div v-for="item in recommend" :key="item.index" class="recommend-item">
     <a :href="item.link">
       <img :src="item.image" alt="">
     </a>
     <div>{{item.title}}</div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend-view {
  width: 100%;
  display: flex;
  padding: 12px 0;
  /* justify-content: space-between; */
  /* background-color: #fff; */
  /* padding: 0 3px; */
  border-bottom: 8px solid  rgb(231, 227, 227);
  text-align: center;
}

.recommend-item {
  flex: 1;
  width: 25%;
  /* padding-top: 20px; */
}

.recommend-item img {
  width: 80px;
  height: 80px;
  /* padding-bottom: 12px; */
}
</style>