<template>
  <div class="goods-params" v-if="Object.keys(GoodsParam).length !== 0">
    <table class="goods-param-sizes">
      <tr v-for="(item,index) in GoodsParam.sizes[0]" :key="index">
        <td v-for="(item,index) in item" :key="index">{{item}}</td>
      </tr>
    </table>
    <table class="goods-param-infos">
      <tr v-for="(item,index) in GoodsParam.infos" :key="index">
        <td v-for="(item,index) in item" :key="index">{{item}}</td>
      </tr>
    </table>
    <img :src="GoodsParam.image" alt="">
</div>
</template>

<script>
export default {
  name: 'GoodsParams',
  props: {
    GoodsParam: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goods-params {
  border-bottom: 7px solid #f2f5f8;
}
.goods-params {
  width: 100%;
}
/* .goods-param-sizes tr:first-child {
  height: 66px;
} */
.goods-param-sizes tr td:first-child {
  width: 25%;
}
table {
  width: 100%;
  text-align: left;
}
td {
  height: 50px;
  padding-left: 20px;
  border-bottom: 3px solid #f2f5f8
}
.goods-param-infos tr {
  height: 50px;
}
.goods-param-infos tr td:first-child {
  width: 30%;
  text-align: left
}
.goods-param-infos tr td:last-child {
  width: 70%;
  color: rgb(255, 178, 178);
}
img {
  width: 100%;
}
</style>