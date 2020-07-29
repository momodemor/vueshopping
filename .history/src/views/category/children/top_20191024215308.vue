<template>
  <div>
    <subcategory v-for="(item,index) in top" :key="index" :item="item"/>
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
  
</style>