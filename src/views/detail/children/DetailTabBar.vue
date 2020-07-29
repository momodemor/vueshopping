<template>
  <div class="tabbar">
    <div class="left">
      <div class="icon waiter">
        <i></i>
        <p>客服</p>
      </div>
      <div class="icon shop">
        <i></i>
        <p>店铺</p>
      </div>
      <div class="icon collect">
        <i></i>
        <p>收藏</p>
      </div>
    </div>
    <div class="right">
      <div class="cart" @click="addCart"><span>加入购物车</span></div>
      <div class="buy"><span>购买</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailTabBar',
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  },
}
</script>

<style scoped>
.tabbar {
  /* width: 100%; */
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* display: flex; */
  z-index: 123456;
  background-color: #fff;
}
.left,.right {
  width: 50%;
  display: flex;
  /* flex: 1; */
}
.left > div,.right > div {
  flex: 1;
}
i {
  display: block;
  height: 22px;
  width: 22px;
  background: url(~assets/img/detail/detail_bottom.png);
  background-size: 22px;
}
.icon i{
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 5px;
}
p {
  text-align: center;
}
.shop i {
  background-position-y: -98px;
}
.waiter i {
  background-position-y: -53px;
}
.cart,.buy {
  text-align: center;
  font-size: 20px;
  line-height: 49px;
}
.cart {
  background-color: rgb(252, 219, 14);
}
.buy {
  background-color: rgb(252, 119, 152);
}
</style>