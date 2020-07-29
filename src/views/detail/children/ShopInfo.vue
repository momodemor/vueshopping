<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="logo">
      <img :src="shopInfo.logo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-out">
      <div class="shop">
        <div class="sells">
          <span>{{shopInfo.sells}}</span>
          <p>总销量</p>
        </div>
        <div class="goodsCount">
          <span>{{shopInfo.goodsCount}}</span>
          <p>全部宝贝</p>
        </div>
        <div class="shopInfo-score">
          <div v-for="n in shopInfo.score.length " :key="n" class="shop-score">
            <div class="name">
              <span>{{shopInfo.score[n-1].name}}</span>
            </div>
            <div class="score" :class="{active: shopInfo.score[n-1].isBetter}">
              <span>{{shopInfo.score[n-1].score}}</span>
            </div>
          </div> 
        </div>
      </div>
    </div>
    <div class="out">
      <div class="goIn">
        <a :href="shopInfo.shopUrl">进店逛逛</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.shop-info {
  padding: 20px 5px;
  border-bottom: 5px solid #f2f5f8;

}
.logo img {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  vertical-align: middle;
}
.logo span {
  font-size: 20px;
  vertical-align: middle;
}
.shop-out {
  margin-bottom: 20px;
}
.shop {
  display: flex;
  text-align: center;
}
.sells {
  /* width: 25%; */
  flex: 1;
  margin-top: 25px;
}
.goodsCount {
  /* width: 25%; */
  flex: 1;
  margin-top: 25px;
}
.shopInfo-score {
  /* width: 50%; */
  flex: 2;
  /* margin-top: 10px; */
  /* vertical-align: bottom; */
  padding-top: 7px
}
.shop-score {
  display: flex;
}
.name,.score {
  flex: 1;
  margin-right: 10px;
}
.score {
  padding-top: 5px;
  text-align: left;
}
.active {
  color: rgb(255, 178, 178);
}
.out {
  position: relative;
  height: 30px;
  width: 100x;
}
.goIn {
  /* margin: 0 auto; */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%)
}
.goIn a {
  /* text-decoration: none; */
  color: black
}
</style>