<template>
  <div class="goods-list-item">
    <div class="checked">
      <checked :isChecked="goodsInfo.checked" @click.native="checkedGoods"></checked>
    </div>
    <div class="img"><img :src="goodsInfo.image" alt=""></div>
    <div class="desc">
      <div class="title">{{goodsInfo.title}}</div>
      <div class="desc1">{{goodsInfo.desc}}</div>
      <div class="price"><span class="left">￥{{goodsInfo.realPrice}}</span><span class="right">x{{goodsInfo.count}}</span></div>
      <!-- <p>{{goodsInfo.title}}</p>
      <p>{{goodsInfo.desc}}</p>
      <p>￥{{goodsInfo.realPrice}}</p> -->
    </div>
  </div>
</template>

<script>
import Checked from './Checked'
export default {
  name: 'GoodsListItem',
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    Checked
  },
  methods: {
    checkedGoods() {
      this.goodsInfo.checked = !this.goodsInfo.checked
    }
  },
}
</script>

<style scoped>
.goods-list-item {
  width: 100%;
  display: flex;
  height: 150px;
  overflow: hidden;
  padding: 10px 5px 10px 0;
  border-bottom: 1px solid  #666;
}
.check {
  /* position: relative; */
  width: 30px;
  padding: 0 2px;
  /* align-items: center; */
  /* vertical-align: middle */
}
.desc {
  overflow: hidden;
}

img {
  /* width: 100%; */
  width: 80px;
  height: 120px;
  display: block;
  border-radius: 5px;
  /* overflow: hidden; */
}
.title,.desc1,.price{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 10px 8px;
}
.title {
  font-size: 20px;
  text-align: left;
}
.desc {
  font-size: 15px;
  text-align: left;
}
.left {
  color: rgb(255, 178, 178);
  font-size: 17px;
}
</style>