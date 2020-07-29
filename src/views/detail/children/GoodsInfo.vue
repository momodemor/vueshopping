<template>
  <div v-if="Object.keys(goods).length !== 0" class="goodsInfo">
    <p>{{goods.desc}}</p>
    <div >
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="goods-columns">
      <div>
        <span>{{goods.columns[0]}}</span>
      </div>
      <div>
        <span>{{goods.columns[1]}}</span>
      </div>
      <div>
        <span>{{goods.services[goods.services.length - 1].name}}</span>
      </div>
    </div>
    <div class="other-info">
      <div v-for="n in goods.services.length - 1" :key="n">
        <img src="http://s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png" alt="">
        <span>{{goods.services[n-1].name}}</span>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'GoodsInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}        
      }
    }
  }
}
</script>

<style scoped>
.goodsInfo {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.new-price {
  color: rgb(255, 178, 178);
  font-size: 30px; 
}
.old-price {
  text-decoration: line-through;
}
.discount {
  background-color: #faa;
  border-radius: 5px;
  font: 18px;
  line-height: 20px;
  vertical-align: top;
}
.goods-columns {
  display: flex;
  border-bottom: 5px solid #f2f5f8;
}
.goods-columns div {
  flex: 1;
  padding: 15px;

}
.goods-columns div span:first-child() {
  text-align: left;
}
/* .goods-columns div:nth-child(2) {
  text-align: center;
} */
.goods-columns div span:last-child() {
  text-align: right;
}
.other-info {
  display: flex;
  font:23px;
  line-height: 45px;
  vertical-align: middle;
}
.other-info div {
  flex: 1;
}
/* .other-info div span:first-child {
  text-align: left;
} */
/* .other-info div:nth-child(2) {
  text-align: center;
  flex: 1;
  margin: 0 auto;
} */
/* .other-info div span:last-child() {
  text-align: right;
} */
img {
  margin-top: 3px;
  height: 16x;
  width: 16px;
}
</style>
