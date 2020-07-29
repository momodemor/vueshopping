<template>
  <div class="item">
    <a :href="item.link" class="image">
      <img :src="item.image" alt="">
      <span class="title">{{item.title}}</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "subcategory",
    props: {
      item: {
        type: Object,
        default: function() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
img {
  display: block;
  width: 24vw;
}
.item {
  flex: 1;
  width: 24vw;

}
</style>
