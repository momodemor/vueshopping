<template>
  <div>
    <!-- 我的 -->
    <nav-bar class="navbar">
      <template v-slot:center>
        <span>我的信息</span>
      </template>
    </nav-bar>
    <login></login>
    <info/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import Login from './children/Login'
import Info from './children/Info'

export default {
  name: 'Profile',
  components: {
    NavBar,
    Login,
    Info
  }
}
</script>
<style scoped>
.navbar {
  background-color: #ff5777;
  color: #fff;
  box-shadow: 0 0;
}
</style>
