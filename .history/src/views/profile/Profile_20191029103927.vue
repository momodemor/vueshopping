<template>
  <div>
    <!-- 我的 -->
    <nav-bar class="navbar">
      <template v-slot:center>
        <span>我的信息</span>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'Profile',
  components: {
    NavBar,
  }
}
</script>
<style scoped>
.navbar {
  background-color: #ff5777;
}
</style>