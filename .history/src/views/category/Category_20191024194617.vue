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
      //  console.log(res)
        this.list = res.data.category.list
        for (let i = 0; i < this.list.length; i++) {
          this.subcategory[i] = {}
        }
      }),
      getSubcategory(this.list[currentIndex].maitKey).then(res => {
        // console.log(res);
        this.subcategory[currentIndex] = res.data

      })
    },
      // getSubcategory()
    methods: {
      listItemClick(index) {
        getSubcategory(this.list[index].maitKey).then(res => {
          console.log(res);
        this.subcategory[index] = res.data

        })
      }
    },
}

</script>

<style scoped>

</style>
