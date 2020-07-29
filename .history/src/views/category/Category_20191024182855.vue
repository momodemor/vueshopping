<template>
  <div>
    <left-list v-bind:list="list"></left-list>
  </div>
</template>

<script>
  import leftList from './children/leftList'

  import {getCategory,getSubcategory,getCategoryDetail} from "network/category"

  export default {
    name: 'Category',
    data() {
      return {
        list: []
      }
    },
    components: {
    leftList
    },
    created() {
      getCategory().then(res => {
       console.log(res)
        this.list = res.data.category.list})
      }

    }

</script>

<style scoped>

</style>
