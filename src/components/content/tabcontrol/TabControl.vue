<template>
  <div class="tab-control-root">
    <div v-for="(item,index) in title" :key="index" @click="itemClick(index)" class="tab-control" :class="{active: index === currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabCtrol',
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
.tab-control-root {
  padding: 15px;
  height: 50px;
  line-height: 35px;
  display: flex;
  text-align: center;
  /* position: sticky; */
  /* top: 44px; */
  background-color: #fff;
  /* margin-bottom: 5px; */
}

.tab-control {
  flex: 1;
}

.tab-control span {
  font-size: 20px;
  padding: 3px;
}

.active span{
  color: rgb(255, 178, 178);
  border-bottom: 3px solid rgb(255, 178, 178);
}
</style>