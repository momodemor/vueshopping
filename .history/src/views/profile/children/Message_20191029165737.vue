<template>
  <div class="messsage">
    <div class="item">
      <div class="image">
        <img src="~assets/img/profile/message.svg" alt="">
      </div>
      <div class="text">
        <p>我的消息</p>
      </div>
    </div>
    <div class="item">
      <div class="image">
        <img src="~assets/img/profile/shopping.svg" alt="">
      </div>
      <div class="text">
        <p>积分商城</p>
      </div>
    </div>
    <div class="item">
      <div class="image">
        <img src="~assets/img/profile/vip.svg" alt="">
      </div>
      <div class="text">
        <p>会员卡</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
}
</script>

<style scoped>
.item {
  display: flex;
  padding: 20px;
}
.image {
  flex: 1
}
img {
  width: 100%;
  height: 100%;
}
.text {
  flex: 18;
  padding-left: 10px;
}
</style>