<template>
    <div class="list">
      <div v-for="(item,index) in list" :key="index" class="left">{{list[index].title}}</div>
    </div>
</template>

<script>
    export default {
      name: "leftList",
      props: {
        list: {
          type: Array,
          default: []
        }
      }
    }
</script>

<style scoped>
.list {
  width: 25vw;
}
.left {
  width: 100;
  height: 30px;
}
</style>

