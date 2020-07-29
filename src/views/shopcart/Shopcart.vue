<template>
  <div>
    <nav-bar class="cart-nav-bar">
      <template v-slot:center>
        <div>购物车({{cartList.length}})</div>
      </template>
    </nav-bar>
    <goods-list></goods-list>
    <total></total>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import GoodsList from './children/GoodsList'
import Total from './children/Total'

import {mapGetters} from 'vuex'

export default {
  name: 'Shopcart',
  components: {
    NavBar,
    GoodsList,
    Total
  },
  computed: {
    ...mapGetters(['cartList'])
  }
}
</script>

<style scoped>
.cart-nav-bar {
  /* height: 44px; */
  background-color: rgb(255, 178, 178);
  color: #fff;
  
}
div {
  width: 100;
  text-align: center;
}
</style>