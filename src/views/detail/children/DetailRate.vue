<template>
  <div class="detail-rate" v-if="Object.keys(Rate).length !== 0">
    <div class="more">
      <span>用户评价</span>
      <a href="">更多</a>
    </div>
    <div class="user">
      <img class="user1" :src="Rate.user.avatar" alt="">
      <span>{{Rate.user.uname}}</span>
      <p>{{Rate.content}}</p>
      <p><span>{{Rate.created | showDate}}</span><span>{{Rate.style}}</span></p>
      <img class="user-image"  :src="item" alt="" v-for="(item,index) in Rate.images" :key="index">
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils'
export default {
  name: 'DetailRate',
  data() {
    return {
      time: ""
    }
  },
  props: {
    Rate: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(val) {
      const date = new Date(val*1000)
      return formatDate(date,'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
.more {
  position: relative;
  height: 60px;
  padding: 15px 10px;
  font-size: 16px;
  border-bottom: 3px solid #f2f5f8;
}
.more a {
  position: absolute;
  /* text-align: right; */
  right: 15px;
}
.user {
  border-top: 5px solid #f2f5f8;
  padding: 5px 7px;
}
.user span{
  padding-left: 5px;
}
.user .user1 {
  width: 40px;
  border-radius: 50%;
  /* text-align: center; */
  /* line-height: 40px; */
  vertical-align: middle;
}
.user p {
  padding: 20px 5px 5px;
}
.user-image {
  height: 100px;
  /* width: 48%; */
}
</style>