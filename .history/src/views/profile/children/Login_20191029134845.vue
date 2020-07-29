<template>
  <div class="info">
    <div>
      <img src="~assets/img/profile/avatar.svg" alt="" class="avatar">
    </div>
    <div class="right">
      <div>
        <span>登陆/</span>
        <span>注册</span>
      </div>
      <div>
        <img src="~assets/img/profile/phone.svg" alt="" class="phone">
        <span>暂无绑定手机号</span>
      </div>
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
}
.phone {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  top: 0.4em;
  left: -0.2em;
}
.info {
  background-color: #ff5777;
  color: #fff;
  display: flex;
  padding: 10px;
}
.right {
  position: relative;
  top: 18px;
}
</style>