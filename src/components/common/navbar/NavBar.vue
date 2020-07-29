<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar {
  /* position: fixed; */
  position: relative;
  height: 44px;
  line-height: 44px;
  display: flex;
  left: 0;
  right: 0;
  top: 0;
  /* background-color: rgba(255, 0, 0, .3); */
  z-index: 7;
  /* text-align: center; */
  /* line-height: 44px; */
  /* color: #fff; */
  box-shadow: 0 2px 2px rgba(100, 100, 100, .3);
  font-size: 25px;
}

.left,.right {
  width: 60px;
  /* background-color: #fff; */
}

.center {
  width: 100%;
  display: flex;
  justify-content: space-around;
  /* margin: a auto; */
  /* align-content: space-around */
  /* text-align: center */
}
</style>