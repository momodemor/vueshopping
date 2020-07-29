<template>
  <div class="info">
    <div>
      <img src="~assets/img/profile/avatar.svg" alt="" class="avatar">
    </div>
    <div>
      <div>
        <span>登陆/</span>
        <span>注册</span>
      </div>
      <div>
        <img src="~assets/img/profile/phone.svg" alt="" class="phone">
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
  width: 14px;
  height: 14px;
}
.info {
  background-color: #ff5777;

}
</style>