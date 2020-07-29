<template>
  <div class="info">
    <div><span class="number">0.00</span><span>元</span><br><span>我的盈余</span></div>
    <div><span class="number">0</span><span>个</span><br><span>我的优惠</span></div>
    <div><span class="number">0</span><span>分</span><br><span>我的积分</span></div>
  </div>
</template>

<script>
export default {
  name: 'Info',
}
</script>

<style scoped>
.info {
  display: flex
}
.info div {
  flex: 1;
  border-right: 2px solid #eee;
  text-align: center;
  padding: 10px;
}
.info div:last-child {
  border-right: none;
}
.number {
  font-weight: 500;
  color: #ff5777;
}
</style>