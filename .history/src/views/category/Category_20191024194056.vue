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
        currentIndex: 0,
        subcategory: []
      }
    },
    components: {
    leftList
    },
    created() {
      getCategory().then(res => {
       console.log(res)
        this.list = res.data.category.list
        for (let index = 0; index < this.list.length; index++) {
          this.subcategory[index] = {}
        }
      }),
      getSubcategory(this.list[index].maitKey).then(res => {
        console.log(res);
      })
    },
      // getSubcategory()
    methods: {
      listItemClick(index) {
        getSubcategory(this.list[index].maitKey).then(res => {
          console.log(res);
        })
      }
    },
}

</script>

<style scoped>

</style>
