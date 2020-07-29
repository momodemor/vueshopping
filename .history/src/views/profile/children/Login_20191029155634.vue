<template>
  <div class="info">
    <div class="image">
      <img src="~assets/img/profile/avatar.svg" alt="" class="avatar">
    </div>
    <div class="right">
        <span>登陆/</span>
        <span>注册</span>
        <br>
        <img src="~assets/img/profile/phone.svg" alt="" class="phone">
        <span>暂无绑定手机号</span>
    </div>
    <div class="arrow">
      <img src="~assets/img/common/arrow-left.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style scoped>
.avatar {
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  margin: 0;
}
.phone {
  position: relative;
  width: 1em;
  height: 1em;
  top: 0.2em;
  left: -0.2em;
}
.info {
  background-color: #ff5777;
  color: #fff;
  display: flex;
  padding: 5px;
  position: relative;
}
.right {
  height: 20vw;
  position: relative;
  padding: 4vw;
  line-height: 10vw;
}
.image {
  width: 20vw;
  height: 20vw;
}
.arrow {
  position: absolute;
  right: 0;
  padding-right: 20px;
}
.arrow img {
  width: 30px;
  height: 30px;
  position: relative;
  top: 22.5px;
}

</style>