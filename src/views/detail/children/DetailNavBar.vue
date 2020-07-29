<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <template v-slot:left>
        <img src="~assets/img/common/back.svg" alt="" @click="toBack">
      </template>
      <template v-slot:center class="titles">
        <div v-for="(item,index) in title" 
        :key="index" class="title" 
        @click="itemClick(index)" 
        :class="{active:index === currentIndex}">{{item}}</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  data() {
    return {
      title: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    toBack() {
      this.$router.back()
    },
    itemClick(index) {
      this.currentIndex = index
      this.$emit('DNBClick',index)  
    }
  },
}
</script>

<style scoped>
/* .titles {
  position: relative;
  display: flex;
  font-size: 14px;
} */
.title {
  flex: 1;
  color: black;
  text-align: center;
}
.active {
  color: rgb(255, 178, 178);
  border-bottom: 3px rgb(255, 178, 178)
}
.detail-nav-bar {
  margin-bottom: 3px;
}
img {
  margin-left: 12px;
  margin-top: 12px
}
</style>