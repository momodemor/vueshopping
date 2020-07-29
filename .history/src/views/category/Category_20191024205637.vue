<template>
  <div>
    <left-list v-bind:list="list" @listItemClick="listItemClick" :currentIndex="currentIndex"></left-list>
    <div>
      <subcategory v-for="(item,index) in subcategory[currentIndex]" :key="index" :top="item"></subcategory>
    </div>
  </div>
</template>

<script>
  import leftList from './children/leftList'
  import subcategory from './children/subcategory'

  import {getCategory,getSubcategory,getCategoryDetail} from "network/category"
import { log } from 'util'

  export default {
    name: 'Category',
    data() {
      return {
        list: [],
        currentIndex: 0,
        subcategory: [],
      }
    },
    components: {
    leftList,
    subcategory
    },
    created() {
      getCategory().then(res => {
      //  console.log(res)
        this.list = res.data.category.list
        for (let i = 0; i < this.list.length; i++) {
          this.subcategory[i] = []
        }
      }),
      getSubcategory(this.list[this.currentIndex].maitKey).then(res => {
        // console.log(res);
        this.subcategory[this.currentIndex] = res.data.list

      })
    },
      // getSubcategory()
    methods: {
      listItemClick(index) {
        this.currentIndex = index
        getSubcategory(this.list[index].maitKey).then(res => {
          console.log(res);
        this.subcategory[index] = res.data.list
        })
      }
    },
}

</script>

<style scoped>

</style>
