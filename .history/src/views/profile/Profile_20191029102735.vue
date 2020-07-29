<template>
  <div>
    <!-- 我的 -->
    <navbar>
      <template v-slot:center>
        <span>我的信息</span>
      </template>
    </navbar>
/  </div>
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

</style>