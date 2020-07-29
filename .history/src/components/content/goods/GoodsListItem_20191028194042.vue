<template>
  <div class="goods-list-item" @click="goodsClick" v-if="Object.keys(goodsItem).length !== 0">
      <img class="goodsimg" :src="goodsItem.img || goodsItem.show.img" alt="" @load="imageLoad">
    <div class="info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{'￥'+ goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImageLoad')
    },
    goodsClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>

<style scoped>
.goods-list-item {
  width: 48%;
  padding-bottom: 40px;
  position: relative;
  /* float: left; */
}

.info {
  position: absolute;
  font-size: 12px;
  text-align: center;
  left: 0;
  right:0;
  bottom: 0;
  margin-bottom: 3px;
}

.info p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info .price {
  color: rgb(255, 178, 178);
}

.info .collcet {
  position: relative;
}

.info .collect::before {
  content: '';
  display: block;  
  position: absolute;
  width: 14px;
  height: 14px;
  left: 15px;
  background: url('~assets/img/common/collect.svg') 0 0/14px 14;
}

.goods-list-item img {
  width: 100%;
  border-radius: 7px;
}

</style>