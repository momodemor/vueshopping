<template>
  <div class="category">
    <left-list v-bind:list="list" @listItemClick="listItemClick" :currentIndex="currentIndex"></left-list>
    <div>
      <top :top="subcategory[currentIndex]" class="abc"/>
    </div>
  </div>
</template>

<script>


  import leftList from './children/leftList'
  import top from './children/top'

  import {getCategory,getSubcategory,getCategoryDetail} from "network/category"

  export default {
    name: 'Category',
    data() {
      return {
        list: [],
        currentIndex: 0,
        categorydata: [],
      }
    },
    components: {
    leftList,
    top
    },
    created() {
      // getCategory().then(res => {
      //  console.log(res)
      //   this.list = res.data.category.list
      //   for (let i = 0; i < this.list.length; i++) {
      //     this.categorydata[i] = {
      //       top: [],
      //       bottom: {
      //         new: [],
      //         pop: [],
      //         sell: []
      //       }
      //     }
      //   }
      //   return getSubcategory(this.list[this.currentIndex].maitKey)
      // }).then(res => {
      //       console.log(res);
      //     this.subcategory[this.currentIndex] = res.data.list})
      //    if (this.list) {
          //  getSubcategory(this.list[this.currentIndex].maitKey).then(res => {
          //   // console.log(res);
          // this.subcategory[this.currentIndex] = res.data.list
      // })
      //    }
    },
      // getSubcategory()
    methods: {
      _getCategory() {
         getCategory().then( res=> {
           console.log(res)
           this.list = res.data.category.list
           for (let i = 0; i < this.list.length; i++) {
             this.categorydata[i] = {
               top: [],
               bottom: {
                 new: [],
                 pop: [],
                 sell: []
               }
              }
            }
          })
          this._getSubcategory(0)
      },
      _getSubcategory(index) {
        this.currentIndex = index
        let mailKey = this.list[index].mailKey
        getSubcategory(maitKey).then(res => {
          console.log(res);
          
        })
      },
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
.category {
  display: flex;
  width: 100vw;
}
.abc {
  display: flex;
  flex-wrap: wrap;
  width: 75vw;
  justify-content: flex-start;
}
</style>
