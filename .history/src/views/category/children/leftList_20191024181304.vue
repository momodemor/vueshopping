<template>
    <div class="list">
      <div v-for="(item,index) in list" :key="index" class="left" @click="listItemClick(index)" :class="[index == currentIndex ? 'active':'']">{{list[index].title}}</div>
    </div>
</template>

<script>
    export default {
      name: "leftList",
      data() {
        return {
          // isActive: false,
          currentIndex: 0
        }
      },
      props: {
        list: {
          type: Array,
          default: []
        }
      },
      methods: {
        listItemClick(index) {
          this.currentIndex = index
        }
      }
    }
</script>

<style scoped>
.list {
  width: 25vw;
}
.left {
  width: 100%;
  display: block;
  padding: 10px;
  text-align: center;
  background-color: #eee;
  /* height: 30px; */
}
.active {
  background-color: #fff;
  color: #ff5777;
}
</style>

