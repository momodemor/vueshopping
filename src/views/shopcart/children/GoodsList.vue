<template>
  <div class="goods-list">
    <scroll ref="scroll" class="scroll" :click="true">
      <goods-list-item v-for="(item, index) in cartList" :key="index" :goods-info="item"></goods-list-item>
    </scroll>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import Scroll from 'components/common/scroll/Scroll'

import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  components: {
    GoodsListItem,
    Scroll
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.goods-list {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 84px;
  overflow: hidden;
}
.scroll {
  height: 100%;
}
</style>