<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#tabbar {
  height: 49px;
  width: 100%;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  -webkit-box-shadow: 0 -2px 2px rgba(100, 100, 100, 0.3);
  -moz-box-shadow: 0 -2px 2px rgba(100, 100, 100, 0.3);
  box-shadow: 0 -2px 2px rgba(100, 100, 100, 0.3);
  text-align: center;
  z-index: 999;
}

</style>