<template>
  <div class="bottom">
    <div class="left">
      <div class="checkall">
        <checked @click.native="checkedAll" :isChecked="isSelectAll"></checked>
        <span>全选</span>
      </div>
      <div class="totalprice">合计：￥{{totalPrice}}</div>
    </div>
    <div class="right" @click="pay">去计算({{toPay}})</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Checked from './Checked'
export default {
  name: 'Total',
  components:{
    Checked
  },
  methods: {
    checkedAll() {
      if (this.isSelectAll) {
        this.cartList.map(item => item.checked = false)
      }else {
        this.cartList.map(item => item.checked = true)
      }
    },
    pay() {
      if (this.cartList.length === 0 || (this.cartList.filter(item => item.checked === false).length === this.cartList.length)) {
        this.$toast.show('请选择要购买的商品',2000)
      }
    }
  },
  computed: {
    ...mapGetters(['cartList']),
    isSelectAll() {
      if (this.cartList.length === 0) {
        return false
      }else {
        return !(this.cartList.find(item => !item.checked))
      }
    },
    toPay() {
      return this.cartList.filter(item => item.checked === true).length
    },
    totalPrice() {
      return this.cartList.filter(item => item.checked === true).reduce((pre,item) => pre + item.count*item.realPrice,0).toFixed(2)
    }
  }
}
</script>

<style scoped>
.bottom {
  height: 35px;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 49px;
  background-color: rgb(212, 205, 205);
  line-height: 35px;
  text-align: center;
}
.left {
  display: flex;
}
.checkall {
  padding-right: 20px;
  padding-left: 10px;
  display: flex
}
span {
  padding-left: 5px;
}
.right {
  color: #fff;
  background-color: #f00;
}
</style>