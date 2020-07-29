<template>
  <div class="other">
    <div class="item">
      <div class="image">
        <img src="~assets/img/profile/cart.svg" alt="">
      </div>
      <div class="text">
        <p>我的购物车</p>
      </div>
    </div>
    <div class="item">
      <div class="image">
        <img src="~assets/img/profile/pointer.svg" alt="">
      </div>
      <div class="text">
        <p>下载购物APP</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Other'
}
</script>

<style scoped>
.other {
  border-bottom: 16px solid #eee;
}
.item {
  display: flex;
  padding: 10px;
}
.item div:last-child {
  padding-bottom: 4px;
  border-bottom: 2px solid #eee;
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