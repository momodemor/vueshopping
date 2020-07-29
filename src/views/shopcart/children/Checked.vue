<template>
  <div>
    <img src="~assets/img/cart/tick.svg" alt="" :class="{checked:isChecked}">
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Checked',
  data() {
    return {
      // checked: false
    }
  },
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
  // computed: {
  //   ...mapGetters(['cartList']),    
  // }
}
</script>

<style scoped>
div {
  width: 20px;
  height: 100%;
  position: relative;
}
img {
  /* background-color: rgb(160, 152, 152); */
  border-radius: 50%;
  border: 2px solid rgb(160, 152, 152);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.checked {
  background-color: #f00;
  border-color: #f00;
}
</style>