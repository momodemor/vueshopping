<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message = '默认信息',duration = 2000) {
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration);
    }
  },
}
</script>

<style scoped>
.toast {
  position: fixed;
  height: 50px;
  width: 300px;
  line-height: 50px;
  font-size: 30px;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  color: #fff;
  background-color: rgba(0,0,0,.6);
  text-align: center;
  border-radius: 5px;
  text-align: center;
}
</style>