<template>
  <div>
    <!-- 我的 -->
    <nav-bar class="navbar">
      <template v-slot:center>
        <span>我的信息</span>
      </template>
    </nav-bar>
    <info/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import Info from './children/Info'
export default {
  name: 'Profile',
  components: {
    NavBar,
    Info,
  }
}
</script>
<style scoped>
.navbar {
  background-color: #ff5777;
  color: #fff;
}
</style>