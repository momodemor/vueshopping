<template>
  <div class="recommendItem">
    <a :href="goodsItem.item_url"><img :src="goodsItem.image" alt=""></a>
    <div class="msg">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{'￥'+goodsItem.price}}</span>
      <img src="~assets/img/common/collect.svg" alt="" class="icon">
      <span>{{goodsItem.cfav}}</span>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'RecommendItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
/* .recommendItem {
  width: 48%;
} */
.recommendItem {
  width: 48%;
  text-align: center;
}
img{
  width: 100%;
  border-radius: 7px;
}
p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
span {
  padding-left: 3px;;
}
.price {
  color: rgb(255, 178, 178);
}
</style>