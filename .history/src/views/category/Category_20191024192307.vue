<template>
  <div>
    <left-list v-bind:list="list" @listItemClick="listItemClick" :currentIndex="currentIndex"></left-list>
  </div>
</template>

<script>
  import leftList from './children/leftList'

  import {getCategory,getSubcategory,getCategoryDetail} from "network/category"
import { log } from 'util'

  export default {
    name: 'Category',
    data() {
      return {
        list: [],
        // currentIndex: 0
      }
    },
    components: {
    leftList
    },
    created() {
      getCategory().then(res => {
       console.log(res)
        this.list = res.data.category.list})
    },
      // getSubcategory()
    methods: {
      listItemClick(currentIndex) {
        getSubcategory(list[currentIndex].maitKey) {
          res => console.log(res);
          
        }
      }
    },
}

</script>

<style scoped>

</style>
