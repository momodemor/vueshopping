<template>
  <div>
    <a :href="top.link" class="image">
      <img :src="top.image" alt="">
      <span class="title">{{top.title}}</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "subcategory",
    props: {
      top: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>

</style>
