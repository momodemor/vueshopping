<template>
  <div id="tabbaritem" @click="tabBarItemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="isActiveColor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    fontColor:{
      type:String,
      default:'#f00'
    }
  },
  data() {
     return {
      }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    isActiveColor() {
      return this.isActive ? {color:this.fontColor} : ''
    }
  },
  methods: {
    tabBarItemClick() {
      this.$router.replace(this.path)
    }
  },
}

</script>

<style scoped>
#tabbaritem {
  /* float: left; */
  flex: 1;
  margin-top: 1px;
}

#tabbaritem img {
  height: 24px;
}
</style>