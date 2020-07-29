<template>
  <div class="top">
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
      default: function() {
        return []
      }
    }
  },
  components: {
    subcategory
  }
}
</script>

<style scope=>
  .top {
    display: flex;
    flex-wrap: wrap;
  }
  .item {
    flex: 1;
  }
</style>