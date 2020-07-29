<template>
  <div>
    <div v-for="(item,index) in top" :key="index">
      <a :href="item.link" class="image">
        <img :src="item.image" alt="">
        <span class="title">{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "subcategory",
    props: {
      top: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>

</style>
