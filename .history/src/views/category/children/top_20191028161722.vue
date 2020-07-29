<template>
  <div class="top" v-if="top.length != 0">
    <subcategory v-for="(item,index) in top" :key="index" :item="item" class="item"/>
  </div>
</template>

<script>
import subcategory from './subcategory'

export default {
  name: 'top',
  props: {
      top: {
      type: Array,
      // default: function() {
      //   return []
      // }
    }
  },
  components: {
    subcategory
  }
}
</script>

<style scope=>
  .top {
    width: 75vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .item {
    flex: 1;
    text-align: center;
  }
</style>