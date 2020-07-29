<template>
  <div>
    <div v-for="top"></div>
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
