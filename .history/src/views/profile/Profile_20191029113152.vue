<template>
  <div>
    <!-- 我的 -->
    <nav-bar class="navbar">
      <template v-slot:center>
        <span>我的信息</span>
      </template>
    </nav-bar>
    <!-- <login></login> -->
    <div class="info">
    <div>
      <img src="~assets/img/profile/avatar.svg" alt="">
    </div>
    <div>
      <div>
        <span>登陆/</span>
        <span>注册</span>
      </div>
      <div>
        <img src="~assets/img/profile/phone.svg" alt="">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

// import Login from './children/Login'

export default {
  name: 'Profile',
  components: {
    NavBar,
    // Login
  }
}
</script>
<style scoped>
.navbar {
  background-color: #ff5777;
  color: #fff;
}
</style>